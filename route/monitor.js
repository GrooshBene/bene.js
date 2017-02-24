/**
 * Created by GrooshBene on 2017-02-20.
 */
var pcap = require('pcap2');
var moment = require('moment');

//var args = require('./args.js');
var CONST = require('./constants.js');
var ui = require('./ui.js');
var log = require('./log.js');

var start = function () {
    /*var pcap_session = new pcap.Session('en0', {filter : 'ip proto \\tcp'});
    var tcp_tracker = new pcap.TCPTracker();
    tcp_tracker.on('http request', function (session, http) {
        var logString = http.request.method + ' ' + http.request.url + 'HTTP/' + http.request.http_version;
        var headers = http.request.headers;
        var timestamp = moment();   //parse time

        ui.displayLog(logString, headers, timestamp);

        if(typeof args.params.log !== 'undefined'){
            log.writeLog(http.request. timestamp, args.params.log);
        }
    });

    pcap_session.on('packet', function (raw_packet) {
        var packet = pcap.decode.packet(packet);
    })*/

//new source
    var tcpTracker = new pcap.TCPTracker();
    var pcapSession = new pcap.Session("", {
        filter: 'ip proto \\tcp'
    });
	var sys = require('sys');

tcpTracker.on('session', function (session, http) {
	ui.displayLog('Start of session between ' + session.src_name + ' and ' + session.dst_name, " ", " ");
	//console.log('Session : ' + console.log(sys.inspect(session)));
    session.on('end', function (session) {
	ui.displayLog('End of TCP session between ' + session.src_name + ' and ' + session.dst_name, " ", " ");
    });
});

pcapSession.on('packet', function (rawPacket) {
    var packet = pcap.decode.packet(rawPacket);
    tcpTracker.track_packet(packet);
});
};

exports.start = start;
