var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request', doRequest);
server.listen(1337);
console.log('Server runnning at local host port 1337');

function doRequest (req, res) {
    fs.readFile('./hello.html', 'UTF-8', function(err,data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    });
}
