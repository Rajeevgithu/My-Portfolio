import { handleChatRequest } from '../src/lib/chat/handleChatRequest.js';
import { hasAnyApiKey } from '../src/lib/chat/env.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!hasAnyApiKey()) {
    console.error('Chat API: no AI keys found in environment (GEMINI_API_KEY / GOOGLE_API_KEY)');
    return res.status(503).json({
      error:
        'AI is not configured on the server. Add GEMINI_API_KEY in Vercel → Settings → Environment Variables, enable Production + Preview, then redeploy.',
    });
  }

  try {
    const result = await handleChatRequest(req);
    return res.status(200).json(result);
  } catch (error) {
    const statusCode = error.statusCode || 500;
    const message =
      statusCode === 500
        ? 'Sorry, the assistant is temporarily unavailable. Please email rajeevverma4577@gmail.com.'
        : error.message;

    if (statusCode >= 500) {
      console.error('Chat API error:', error);
    }

    return res.status(statusCode).json({ error: message });
  }
}
