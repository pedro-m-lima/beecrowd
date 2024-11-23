//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = '12 1 5.30\n16 2 5.10'; //Informe aqui a entrada, caso mais de uma separe as com \n
var lines = input.split('\n');

let p1 = lines[0].split(' ');
let p2 = lines[1].split(' ');

console.log(`VALOR A PAGAR: R$ ${((parseFloat(p1[1]) *parseFloat(p1[2]))+(parseFloat(p2[1])*parseFloat(p2[2]))).toFixed(2)}`);

