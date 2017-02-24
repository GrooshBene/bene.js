// /**
//  * Created by GrooshBene on 2017-02-13.
//  */
// var server = require('./route/server');
// var social = require('./route/social');
//
// server.openServer(8000);
//
// server.catchPostReq('/', function(req, res){
//     console.log("req : " + req.param('asdf'));
//     res.send("asdf");
// });
//
// social.initialize();
// social.fbTokeninit("1132996196786425", "6d689678c191d56a3f8dfcae932a9fac", function (result) {
//     console.log(result);
// });
// //===================================================

// require('./route/monitor').start();
var pcap = require('pcap2'),
    tcpTracker = new pcap.TCPTracker(),
    pcapSession = new pcap.Session('en0', {
        filter: 'ip proto \\tcp'
    });

tcpTracker.on('session', function (session) {
    console.log('Start of session between ' + session.src_name + ' and ' + session.dst_name);
    session.on('end', function (session) {
        console.log('End of TCP session between ' + session.src_name + ' and ' + session.dst_name);
    });
});

pcapSession.on('packet', function (rawPacket) {
    var packet = pcap.decode.packet(rawPacket);
    tcpTracker.track_packet(packet);
});