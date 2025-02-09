// CJS (CommonJS) and MJS (ECMAScript Modules)

// The most common example Hello World of Node.js is a web server:


// To run this snippet, save it as a server.js file and run node server.js in your terminal. If you use mjs version of the code, you should save it as a server.mjs file and run node server.mjs in your terminal.
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
