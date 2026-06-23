export function getApiKeys() {
  const read = (name) => process.env[name]?.trim() || '';

  return {
    geminiKey: read('GEMINI_API_KEY') || read('GOOGLE_API_KEY'),
    groqKey: read('GROQ_API_KEY'),
    openaiKey: read('OPENAI_API_KEY'),
  };
}

export function hasAnyApiKey() {
  const { geminiKey, groqKey, openaiKey } = getApiKeys();
  return Boolean(geminiKey || groqKey || openaiKey);
}
