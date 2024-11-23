//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = "2.00"; //Informe aqui a entrada, caso mais de uma separe as com \n
var lines = input.split('\n');

let raio = parseFloat(lines[0]);

console.log(`A= ${((raio ** 2)*3.14159).toFixed(4)}`);