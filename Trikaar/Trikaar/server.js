var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.port || 1337;

var app = express();
app.use(bodyParser());

app.get('/', function (req, res) {
    res.send("<b>this response is send through express router </b>");
});
app.get('/', function (request, response) {
    response.sendfile("views/TestApp.html");
});
app.listen(port);
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);