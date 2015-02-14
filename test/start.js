var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server runnning at local host port 1337');
