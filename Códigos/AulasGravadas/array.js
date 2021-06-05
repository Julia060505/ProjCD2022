let rs = require('readline-sync')

/*            SEM USAR ARRAY

let numInserido1 = rs.questionInt('Insira o numero 1:')
let numInserido2 = rs.questionInt('Insira o numero 2:')
let numInserido3 = rs.questionInt('Insira o numero 3:')
let numInserido4 = rs.questionInt('Insira o numero 4:')
let numInserido5 = rs.questionInt('Insira o numero 5:')

let resultado = numInserido1 + numInserido2 + numInserido3 + numInserido4 
+ numInserido5

console.log(`${numInserido1} + ${numInserido2} + ${numInserido3} + ${numInserido4}
+ ${numInserido5} = ${resultado}`) 



             USANDO ARRAY / parte 01

let numInseridos = []
let resultado = 0

for (let i = 0; i < 5; i++){

    let numInserido = rs.questionInt(`Insira um numero ${i}:`)
    numInseridos.push(numInserido)
    resultado = resultado + numInserido

}

let imprimir = ""
 for( let n = 0; n < numInseridos.length; n++){
    imprimir = `${imprimir} + ${numInseridos[n]}`
 }

 imprimir = imprimir + "=" + resultado
 console.log(imprimir)*/


 //            USANDO ARRAY / parte 02

let carros = [] // criando array vazia
let carro = new Array()  // criando array vazia

let carrosMarcas = [ 'Bmw, Volvo, Fiat']
let carroMarcas = new Array( 'Bmw, Volvo, Fiat')

let nomeCadastro = [
  'Lorena Silva', 'Junior Carvalho', 'Luiza Souza',
   18,
   'Brasileiros',
   {
   'Capital': 'Rio de Janeiro',
    'Estado': 'Rio de Janeiro'
   }
]