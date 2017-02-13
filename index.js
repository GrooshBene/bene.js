/**
 * Created by GrooshBene on 2017-02-13.
 */
var server = require('./route/server');

server.openServer(8000);

server.catchPostReq('/', function(req, res){
    console.log("req : " + req.param('asdf'));
    res.send("asdf");
})