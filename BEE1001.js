//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = "10\n9"; //Informe aqui a entrada, caso mais de uma separe as com \n
var lines = input.split('\n');

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);

let X = A + B;
console.log(`X = ${X}`);