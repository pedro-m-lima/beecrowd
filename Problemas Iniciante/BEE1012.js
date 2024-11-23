//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = '3.0 4.0 5.2'; //Informe aqui a entrada, caso mais de uma separe as com \n
var lines = input.split('\n');

let v1 = lines[0].split(' ');

console.log(`TRIANGULO: ${(parseFloat(v1[0])*parseFloat(v1[2])/2).toFixed(3)}\nCIRCULO: ${(3.14159*parseFloat(v1[2])**2).toFixed(3)}\nTRAPEZIO: ${(((parseFloat(v1[0])+parseFloat(v1[1]))/2)*parseFloat(v1[2])).toFixed(3)}\nQUADRADO: ${(parseFloat(v1[1])**2).toFixed(3)}\nRETANGULO: ${(parseFloat(v1[0])*parseFloat(v1[1])).toFixed(3)}`);