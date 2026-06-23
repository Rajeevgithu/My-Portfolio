import { generateReply } from './generateReply.js';

const rateLimitStore = new Map();
const RATE_LIMIT = 30;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  return req.socket?.remoteAddress || 'unknown';
}

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now - entry.start > RATE_WINDOW_MS) {
    rateLimitStore.set(ip, { start: now, count: 1 });
    return;
  }

  if (entry.count >= RATE_LIMIT) {
    const error = new Error('Too many requests. Please try again in an hour.');
    error.statusCode = 429;
    throw error;
  }

  entry.count += 1;
}

function parseBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }

  if (typeof req.body === 'string' && req.body.trim()) {
    return JSON.parse(req.body);
  }

  return {};
}

export async function handleChatRequest(req) {
  const ip = getClientIp(req);
  checkRateLimit(ip);

  const body = parseBody(req);
  const messages = Array.isArray(body.messages) ? body.messages : [];

  if (messages.length === 0) {
    const error = new Error('messages array is required');
    error.statusCode = 400;
    throw error;
  }

  const lastMessage = messages[messages.length - 1];
  if (lastMessage?.role !== 'user' || !lastMessage?.content?.trim()) {
    const error = new Error('Last message must be a non-empty user message');
    error.statusCode = 400;
    throw error;
  }

  return generateReply(messages);
}
