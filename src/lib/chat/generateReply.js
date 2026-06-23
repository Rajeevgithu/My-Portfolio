import { buildSystemPrompt } from './portfolioContext.js';

const OPENAI_MODEL = 'gpt-4o-mini';
const GROQ_MODEL = 'llama-3.3-70b-versatile';

const DEFAULT_GEMINI_MODELS = [
  'gemini-2.5-flash',
  'gemini-2.5-flash-lite',
  'gemini-2.0-flash',
  'gemini-2.0-flash-lite',
];

function getGeminiModels() {
  const preferred = process.env.GEMINI_MODEL?.trim();
  if (preferred) {
    return [preferred, ...DEFAULT_GEMINI_MODELS.filter((model) => model !== preferred)];
  }
  return DEFAULT_GEMINI_MODELS;
}

function isValidGeminiKey(key = '') {
  return key.startsWith('AIza') || key.startsWith('AQ.');
}

function getGeminiAuthHeaders(apiKey) {
  return {
    'Content-Type': 'application/json',
    'x-goog-api-key': apiKey,
  };
}

function normalizeMessages(messages) {
  return messages
    .filter((msg) => msg?.role && msg?.content?.trim())
    .slice(-12)
    .map((msg) => ({
      role: msg.role === 'assistant' ? 'assistant' : 'user',
      content: String(msg.content).trim().slice(0, 2000),
    }));
}

function isRetryableGeminiError(message = '') {
  const lower = message.toLowerCase();
  return (
    lower.includes('quota') ||
    lower.includes('limit: 0') ||
    lower.includes('resource_exhausted') ||
    lower.includes('not found') ||
    lower.includes('not supported') ||
    lower.includes('is not found for api version') ||
    lower.includes('high demand')
  );
}

function invalidGeminiKeyError() {
  const error = new Error(
    'Your GEMINI_API_KEY looks invalid. Create a free key at https://aistudio.google.com/apikey (AIza or AQ. format). Or use GROQ_API_KEY from https://console.groq.com'
  );
  error.statusCode = 503;
  return error;
}

function toUserFriendlyError(error) {
  const message = error?.message || 'AI request failed';

  if (isRetryableGeminiError(message)) {
    const friendly = new Error(
      'Gemini quota is unavailable right now. Wait a minute and try again, or add a free GROQ_API_KEY from https://console.groq.com'
    );
    friendly.statusCode = 429;
    return friendly;
  }

  return error;
}

async function callGeminiModel(apiKey, messages, model) {
  const history = messages.map((msg) => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }],
  }));

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      method: 'POST',
      headers: getGeminiAuthHeaders(apiKey),
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: buildSystemPrompt() }],
        },
        contents: history,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 600,
        },
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    const message = data?.error?.message || `Gemini request failed for model ${model}`;
    throw new Error(message);
  }

  const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
  if (!reply) {
    throw new Error(`Gemini model ${model} returned an empty response`);
  }

  return { reply, provider: 'gemini', model };
}

async function callGemini(apiKey, messages) {
  if (!isValidGeminiKey(apiKey)) {
    throw invalidGeminiKeyError();
  }

  const models = getGeminiModels();
  let lastError = null;

  for (const model of models) {
    try {
      return await callGeminiModel(apiKey, messages, model);
    } catch (error) {
      lastError = error;
      if (!isRetryableGeminiError(error.message)) {
        throw error;
      }
      console.warn(`Gemini model "${model}" unavailable:`, error.message);
    }
  }

  throw toUserFriendlyError(lastError || new Error('All Gemini models failed'));
}

async function callGroq(apiKey, messages) {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      temperature: 0.7,
      max_tokens: 600,
      messages: [
        { role: 'system', content: buildSystemPrompt() },
        ...messages.map((msg) => ({
          role: msg.role === 'assistant' ? 'assistant' : 'user',
          content: msg.content,
        })),
      ],
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    const message = data?.error?.message || 'Groq request failed';
    throw new Error(message);
  }

  const reply = data?.choices?.[0]?.message?.content?.trim();
  if (!reply) {
    throw new Error('Groq returned an empty response');
  }

  return { reply, provider: 'groq', model: GROQ_MODEL };
}

async function callOpenAI(apiKey, messages) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      temperature: 0.7,
      max_tokens: 600,
      messages: [
        { role: 'system', content: buildSystemPrompt() },
        ...messages.map((msg) => ({
          role: msg.role === 'assistant' ? 'assistant' : 'user',
          content: msg.content,
        })),
      ],
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    const message = data?.error?.message || 'OpenAI request failed';
    throw new Error(message);
  }

  const reply = data?.choices?.[0]?.message?.content?.trim();
  if (!reply) {
    throw new Error('OpenAI returned an empty response');
  }

  return { reply, provider: 'openai' };
}

export async function generateReply(rawMessages) {
  const messages = normalizeMessages(rawMessages);
  if (messages.length === 0) {
    const error = new Error('At least one user message is required');
    error.statusCode = 400;
    throw error;
  }

  const geminiKey = process.env.GEMINI_API_KEY?.trim();
  const groqKey = process.env.GROQ_API_KEY?.trim();
  const openaiKey = process.env.OPENAI_API_KEY?.trim();

  if (!geminiKey && !groqKey && !openaiKey) {
    const error = new Error(
      'AI is not configured. Add GEMINI_API_KEY, GROQ_API_KEY (free), or OPENAI_API_KEY to your .env file.'
    );
    error.statusCode = 503;
    throw error;
  }

  const providers = [];

  if (geminiKey) providers.push(() => callGemini(geminiKey, messages));
  if (groqKey) providers.push(() => callGroq(groqKey, messages));
  if (openaiKey) providers.push(() => callOpenAI(openaiKey, messages));

  let lastError = null;

  for (const callProvider of providers) {
    try {
      return await callProvider();
    } catch (error) {
      lastError = error;
      console.warn('AI provider failed, trying next:', error.message);
    }
  }

  throw toUserFriendlyError(lastError || new Error('All AI providers failed'));
}
