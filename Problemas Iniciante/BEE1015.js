//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = '1.0 7.0\n5.0 9.0'; //Informe aqui a entrada, caso mais de uma separe as com \n
var lines = input.split('\n');

let p1 = lines[0].split(' ');
let p2 = lines[1].split(' ');

console.log(`${Math.sqrt(((parseFloat(p2[0])-parseFloat(p1[0]))**2)+(parseFloat(p2[1])-parseFloat(p1[1]))**2).toFixed(4)}`);

