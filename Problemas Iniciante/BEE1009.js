//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = "JOAO\n500.00\n1230.30"; //Informe aqui a entrada, caso mais de uma separe as com \n
var lines = input.split('\n');

let nome = (lines[0]);
let salario = parseFloat(lines[1]);
let totalVendas = parseFloat(lines[2]);

console.log(`TOTAL = R$ ${(salario+(totalVendas*0.15)).toFixed(2)}`);

