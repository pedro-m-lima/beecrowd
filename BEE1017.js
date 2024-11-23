//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = '10\n85'; //Informe aqui a entrada, caso mais de uma separe as com \n
var lines = input.split('\n');

let th = parseFloat(lines[0]);
let vm = parseFloat(lines[1]);

console.log(`${((th*vm)/12).toFixed(3)}`);

