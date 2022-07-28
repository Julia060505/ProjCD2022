//  QUESTÃO  6 (27/07)

let rs = require ('readline-sync')
let palavra = rs.question ('Digite uma palavra: ').toLowerCase()

if (palavra.endsWith('al')){
    console.log(palavra)
} else {
    console.log ('Palavra não identificada.')
}