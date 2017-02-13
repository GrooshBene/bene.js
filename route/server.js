var express= require('express');
var app = express();

var server = require('http').Server(app);

function openServer(port){
    server.listen(port);
    console.log("Server is Running on Port "+ port);
}

function catchPostReq(url, callback){
    app.post(url, function(req, res){
        return callback(req, res);
    });
}

function catchGetReq(url, callback){
    app.post(url, function (req, res) {
        return callback(req, res);
    })
}

exports.openServer = openServer;
exports.catchPostReq = catchPostReq;
exports.catchGetReq = catchGetReq;