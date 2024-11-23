//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = "10\n10\n5"; //Informe aqui a entrada, caso mais de uma separe as com \n
var lines = input.split('\n');
let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);


console.log(`MEDIA = ${(((A*2)+(B*3)+(C*5))/10).toFixed(1)}`);
