let rs = require('readline-sync')

let numFatorial = rs.question('Insira um numero para calcular seu fatorial:')

let resultado = 1

while(numFatorial > 1){
    resultado = numFatorial * resultado
    numFatorial = numFatorial - 1
    if(numFatorial > 1){
       
    }
} console.log(resultado)