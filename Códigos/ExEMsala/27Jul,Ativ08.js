//  QUESTÃO  8 (27/07)

let rs = require('readline-sync');
let palavra = rs.question("Digite uma palavra: ").toLowerCase()
let temVogal = false;
let vogais = ['a','e','i','o','u']
for (let i = 0; i < vogais.length;i++){
    if (palavra.indexOf(vogais[i]) !== -1) {
        temVogal = true;
    }
}

temVogal ? console.log('Existem vogais nesta palavra.') : console.log('Não existem vogais nesta palavra.')