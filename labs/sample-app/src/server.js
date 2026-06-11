const http = require('node:http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.url === '/health') return res.end(JSON.stringify({ status: 'ok' }));
  if (req.url === '/config') {
    return res.end(
      JSON.stringify({
        greeting: process.env.GREETING ?? 'hola',
        // never echo the secret itself — only whether it arrived
        apiKeyPresent: Boolean(process.env.API_KEY),
      }),
    );
  }
  res.statusCode = 404;
  res.end(JSON.stringify({ error: 'not found' }));
});

server.listen(PORT, () => console.log(`sample-app listening on :${PORT}`));
