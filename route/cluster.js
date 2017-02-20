/**
 * Created by GrooshBene on 2017-02-19.
 */
var cluster = require('cluster');
var http = require('http');
var CPUNum = require('os').cpus().length;

cluster.schedulingPolicy = cluster.SCHED_NONE;

function forkCluster(){
    for(var i=0; i < CPUNum; i++){
        cluster.fork();
    }
    cluster.on('exit', function (worker, code, signal) {
        console.log('worker' + worker.process.pid + '가 종료되었습니다.');
        console.log('exit code : ' + code);
        console.log('signal : ' + signal);
    });
}

exp
exports.forkCluster = forkCluster;