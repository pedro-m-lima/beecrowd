//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = '1257'; //Informe aqui a entrada, caso mais de uma separe as com \n
var lines = input.split('\n');

var n = parseInt(lines[0]);
console.log(n);

const notas = [100,50,20,10,5,2,1,];

for(i = 0; i < notas.length; i++ ){
  if((n/notas[i]) >= 0){
    resultado = Math.trunc(n/notas[i]);
  }
  
  n = n - (resultado*notas[i]);
  console.log(`${resultado} nota(s) de R$ ${notas[i]},00`);
  }