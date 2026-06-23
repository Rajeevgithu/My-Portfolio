import { loadEnv } from 'vite';
import { handleChatRequest } from './src/lib/chat/handleChatRequest.js';

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

export function chatApiPlugin() {
  return {
    name: 'chat-api-plugin',
    configureServer(server) {
      const env = loadEnv(server.config.mode, server.config.envDir || process.cwd(), '');
      Object.assign(process.env, env);

      server.middlewares.use('/api/chat', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        try {
          const rawBody = await readRequestBody(req);
          req.body = rawBody ? JSON.parse(rawBody) : {};

          const result = await handleChatRequest(req);

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(result));
        } catch (error) {
          const statusCode = error.statusCode || 500;
          const message =
            statusCode === 500
              ? 'Sorry, the assistant is temporarily unavailable. Please email rajeevverma4577@gmail.com.'
              : error.message;

          if (statusCode >= 500) {
            console.error('Chat API error:', error);
          }

          res.statusCode = statusCode;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: message }));
        }
      });
    },
  };
}
