var express= require('express');
var app = express();

var server = require('http').Server(app);

function openServer(port){
    server.listen(port);
    console.log("Server is Running on Port "+ port);
}

exports.openServer = openServer;