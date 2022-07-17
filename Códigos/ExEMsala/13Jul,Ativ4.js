let rs = require ('readline-sync');

let = maça = parseInt(rs.question('Quantas macas voce comprou?'))

//  QUESTÃO 4 (13/07)

if( maça < 12){
    let m1 = maça * 0.3
    console.log("Cada maça tem o custo de R$0,30.Sua conta ficou R$:", m1)

}else if (maça >= 12){
    let m2 = maça * 0.25
    console.log("Cada maça tem o custo de R$0,25.Sua conta ficou R$:", m2)
}else{
    console.log("Valor não reconhecido")
}