//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = "0\n10"; //Informe aqui a entrada, caso mais de uma separe as com \n
var lines = input.split('\n');

let v1 = parseInt(lines[0]);
let v2 = parseInt(lines[1]);

console.log(`PROD = ${v1*v2}`);
