//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = '217 14 6'; //Informe aqui a entrada, caso mais de uma separe as com \n
var lines = input.split('\n');

let num = lines[0].split(' ');
m1 = (((parseInt(num[0])) + (parseInt(num[1]))) + Math.abs(((parseInt(num[0])) - (parseInt(num[1])))))/2;

console.log(`${((m1 + (parseInt(num[2]))) + Math.abs((m1- (parseInt(num[2])))))/2} eh o maior`);

