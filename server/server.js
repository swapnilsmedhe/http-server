const http = require('http');

const startServer = (port, router) => {
  const server = http.createServer((request, response) => {
    request.url = new URL(`http://${request.headers.host}${request.url}`);
    router(request, response);
  });

  server.listen(port, console.log(`Listening on ${port}`))
};

module.exports = { startServer }
