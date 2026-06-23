import { handleChatRequest } from '../src/lib/chat/handleChatRequest.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
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
