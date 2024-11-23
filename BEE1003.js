//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = "30\n0"; //Informe aqui a entrada, caso mais de uma separe as com \n
var lines = input.split('\n');

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);

console.log(`SOMA = ${A+B}`);