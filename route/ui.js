/**
 * Created by GrooshBene on 2017-02-20.
 */
var blessed = require('blessed');

var CONST = requre('./constants.js');

var packet_logs = [];
var packet_headers = [];

var id = 0;
var screen = blessed.screen();

var outer_box = blessed.box({
    fg : '#999999',
    bg : 'default',
    border : {
        type : 'line',
        fg : '#ffffff'
    },
    tags : true,
    content : '{center}' + CONST.NAME.toUpperCase() + '{/center}\n\n{center}' + CONST.DESCRIPTION + '{/center}',
    width : '90%',
    height : '95%',
    top : 'center',
    left : 'center'
});

var logs = blessed.list({
    parent : outer_box,
    width : '90%',
    height : '40%',
    top : '15%',
    left : 'center',
    fg : 'blue',
    border : {
        type : 'line'
    },
    scrollbar : {
        fg : 'blue',
        ch : '|'
    },
    selectedBg : "#222222",
    mouse : true,
    keys : true,
    vi : true
});

logs.prepend(new blessed.Text({
    left : '5%',
    content : ' Logs '
}));

var details = blessed.list({
    parent : outer_box,
    width : '55%',
    height : '40%',
    top : '55%',
    left : '5%',
    fg : 'blue',
    border : {
        type : 'line'
    },
    scrollbar : {
        fg : 'blue',
        ch : '|'
    },
    selectedBg : '#222222',
    mouse : true,
    keys : true,
    vi : true
});

details.prepend(new blessed.Text({
    left : '5%',
    content : ' Header details '
}));

var display = blessed.scrollabletext({
    parent: outer_box,
    width: '30%',
    height: '40%',
    top: '55%',
    left: '65%',
    fg: 'blue',
    border: {
        type: 'line'
    },
    tags: true
});

screen.append(outer_box);

screen.key(['escape', 'q', 'C-c'], function (ch, key) {
    process.exit(0);
});

screen.render();

logs.on('mouseover', function () {
    log.focus();
});

details.on('mouseover', function () {
    details.focus();
})

logs.on('scroll', function () {
    var value = logs.value;
    var id = parseInt(value.substring(1, value.indexOf(' ')));
    showHeaders(packet_headers[id]);
    showDisplay(value, 'Log');
    screen.render();
});

details.on('scroll', function () {
    var value = details.value;
    showDisplay(value, 'Header-detail');
});

function padLeft(str, width, z) {
    z = z || '0';
    str = str + '';
    return str.length>=width?str:(new Array(width - str.length +1 ).join(z) + str);
}

function padRight(str, width, z) {
    z = z||' ';
    str = str + '';
    return str.length>=width?str:(str + new Array(width - str.length +1).join(z));
}

function showHeaders(headers){
    details.clearItems();
    for(var field in headers){
        details.add(field + ' : ' + headers[field]);
    }
}

function showDisplay(content, caller) {
    display.setContent('{center}{bold}' + caller + '{/bold}{/center}\n\n' + content);
}

var displayLog = function (log, headers, timestamp) {
    var log = '#' + padLeft(id, 4, 0) + ' : [' + timestamp.format('DD/MMM/YYYY:HH:mm:ss ZZ') + '] ' + padRight(headers.Host, 30, ' ') + ' ' + log;
    id++;

    packet_logs.push(log);
    packet_headers.push(headers);

    logs.add(log);
    logs.select(id -1);
};

exports.displayLog = displayLog;