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
};

exports.start = start;
