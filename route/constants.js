/**
 * Created by GrooshBene on 2017-02-20.
 */
var packageJson = require('../package.json');

exports.VERSION = packageJson.version;
exports.NAME = packageJson.name;

exports.DESCRIPTION = packageJson.description;
exports.OPTION = [
    {
        name : 'interface',
        short : 'i',
        type : 'string',
        description : '모니터링 할 인터페이스를 설정합니다. 기본 값은 \'any\'입니다.',
        example : 'sudo node index.js --interface=eth0 또는 sudo node app.js -i eth0'
    },
    {
        name : 'filter',
        short : 'f',
        type : 'string',
        description : '모니터링 하는 인터페이스에 적용할 필터를 설정합니다. 기본 값은 \'ip proto\\tcp\'입니다.',
        example : 'sudo node app.js --filter=tcp 또는 sudo node app.js -f tcp'
    },
    {
        name : 'log',
        short : 'l',
        type : 'string',
        description : '트래픽의 로그를 작성할 파일을 설정합니다. 기본 값은 없습니다.',
        example : 'sudo node app.js --log=FileName.txt 또는 sudo node app.js -l FileName.txt'
    }
];