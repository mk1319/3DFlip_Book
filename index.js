var http = require('http');
var fs = require('fs')

var nStatic = require('node-static')

var fileServer = new nStatic.Server('./public/');


const PORT=8080; 


http.createServer(function (req, res) {
    
    fileServer.serve(req, res);

}).listen(PORT);

