//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = "10\n10"; //Informe aqui a entrada, caso mais de uma separe as com \n
var lines = input.split('\n');

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);

console.log(`MEDIA = ${(((A*3.5)+(B*7.5))/11).toFixed(5)}`);

