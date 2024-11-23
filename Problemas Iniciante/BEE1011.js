//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = '1523'; //Informe aqui a entrada, caso mais de uma separe as com \n
var lines = input.split('\n');

let raio = parseFloat(lines[0]);

console.log(`VOLUME = ${((4/3.0)*3.14159*(raio ** 3)).toFixed(3)}`);

