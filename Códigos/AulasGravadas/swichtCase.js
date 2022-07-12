let rs = require ('readline-sync');

let = mes = parseInt(rs.question('Digite o mes:'))


/*            USANDO IF-ELSE 

if(mes === 1){
    console.log("Janeiro")
}else if(mes === 2){
    console.log("Fevereiro")
}else if(mes === 3){
    console.log("Março")
}else if(mes === 4){
    console.log("Abril")
}else if(mes === 5){
    console.log("Maio")
}else if(mes === 6){
    console.log("Junho")
}else if(mes === 7){
    console.log("Julho")
}else if(mes === 8){
    console.log("Agosto")
}else if(mes === 9){
    console.log("Setembro")
}else if(mes === 10){
    console.log("Outubro")
}else if(mes === 11){
    console.log("Novembro")
}else if(mes === 12){
    console.log("Dezembro")
}else{
    console.log("Mes inválido!")
}

 */

//        USANDO O SWITCH CASE

switch (mes){
    case 1:
        console.log('Janeiro, Bem vindo ao ano!')
        break;
    case 2:
        console.log('Fevereiro, Divirta-se no Carnaval!')
        break;
    case 3:
        console.log('Março, Descanse no feriado!')
        break;
    case 4:
        console.log('Abril, Agora sim começa o ano!')
        break;
    case 5:
        console.log('Maio, Dê rosas para sua mãe!')
        break;
    case 6:
        console.log('Junho, Vamos pular fogueira!')
        break;
    case 7:
        console.log('Julho, Ainda da tempo de comer milho!')
        break;
    case 8:
        console.log('Agosto, Esse dura 2 meses em um  só!')
        break;
    case 9:
        console.log('Setembro, Mês do doce!')
        break;
    case 10:
        console.log('Outubro, Feliz dia das crianças!')
        break;
    case 11:
        console.log('Novembro, Já já chega a ceia!')
        break;
    case 12:
        console.log('Dezembro, Feliz Natal!')
        break;
    default:
        console.log('Esse mes é inválido!')
        break;
}