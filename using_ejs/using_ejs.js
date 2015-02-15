var http = require('http');
var fs = require('fs');
var ejs = require('ejs');
//readfilesyncで読んでいるがglobalなので他の処理に割り込まれることはないはず
//filesyncはloadが終わるまで他の処理は受けつけない
var using_ejs = fs.readFileSync('./using_ejs.ejs', 'utf8');

var server = http.createServer();
server.on('request', doRequest);
server.listen(1234);
console.log('server start on 1234');

//リクエストの処理
function doRequest (req, res) {
    var using_ejs2 = ejs.render(using_ejs, {
        title:"タイトルゾーン",
        content:"中身です",
    });
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(using_ejs2);
    res.end();
}

