let rs = require ('readline-sync');

let = ano = parseInt(rs.question('Veja se voce votara no ano de 2022:'))

//  QUESTÃO 01 (11/07)

if(ano >= 1952 && ano <= 2005){
    console.log("Sua idade está autorizada para votar,obrigatoriamente.");
} else{ 
    console.log( "Sua idade não está autorizada para votar!");
}
