const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response){
  console.log('Hello!');
  const text = fs.readFileSync('index.html', 'utf8');
  response.end(text);
});

server.listen(3000);
console.log('Server started!');