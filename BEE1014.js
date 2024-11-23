//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = '2254\n124.4'; //Informe aqui a entrada, caso mais de uma separe as com \n
var lines = input.split('\n');

let x = parseFloat(lines[0]);
let y = parseFloat(lines[1]);

console.log(`MEDIA = ${(x/y).toFixed(3)}`);

