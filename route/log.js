/**
 * Created by GrooshBene on 2017-02-20.
 */
var fs = require('fs');

function clean(str) {
    if (str.indexOf(' ')!=-1){
        return '\"' + str + '\"';
    }

    return str;
}

var writeLog = function (httpRequest, timestamp, logFile) {
    var log = clean(httpRequest.headers.Host)+ ' ';
    log += '[' + timestamp.format('DD/MMM/YYYY:HH:mm:ss ZZ') + ']';
    log += clean(httpRequest.method + ' ' + httpRequest.url + ' HTTP/' + httpRequest.http_version) + ' ';
    log += clean(httpRequest.headers['User-Agent']);
    log += '\n';

    fs.appendFile(logFile, log, function (err) {
        if(err){
            throw err;
        }
    });
}

exports.writeLog = writeLog;