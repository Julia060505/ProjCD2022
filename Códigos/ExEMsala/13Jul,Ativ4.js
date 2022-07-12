let rs = require ('readline-sync');

let = maça = parseInt(rs.question('Quantas macas voce comprou?'))

//  QUESTÃO 4 (13/07)

if( maça < 12){

    console.log("Cada maça tem o custo de R$0,30.")

}else if (maça >= 12){

    console.log("Cada maça tem o custo de R$0,25.")
}else{
    console.log("Valor não reconhecido")
}