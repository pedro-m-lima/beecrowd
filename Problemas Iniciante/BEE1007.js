//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = "0\n0\n7\n8"; //Informe aqui a entrada, caso mais de uma separe as com \n
var lines = input.split('\n');
let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let C = parseInt(lines[2]);
let D = parseInt(lines[3]);


console.log(`DIFERENCA = ${(A*B)-(C*D)}`);
