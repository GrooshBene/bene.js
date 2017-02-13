var express= require('express');
var app = express();

var server = require('http').Server(app);

function openServer(port){
    server.listen(port);
    console.log("Server is Running on Port "+ port);
}

function getPostReq(url, callback){
    app.post(url, function(req, res){
        return callback(req, res);
    });
}

exports.openServer = openServer;
exports.getPostReq = getPostReq;