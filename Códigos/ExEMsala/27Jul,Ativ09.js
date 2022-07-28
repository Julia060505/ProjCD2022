//  QUESTÃO  9 (27/07)

let rs = require('readline-sync')

let frase = rs.question('Digite uma frase com a palavra "bosta": \n')

let reformulado = frase.replace('bosta','estrume')

console.log (reformulado)