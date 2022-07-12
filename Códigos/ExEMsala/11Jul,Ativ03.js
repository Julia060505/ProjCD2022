let rs = require ('readline-sync');

let = senha = parseInt(rs.question('Ola, digite sua senha:'))

// QUESTÃO 3 (11/07)

if(senha === 1234){
    console.log("Acesso Permitido!")
} else if(senha != 1234){
    console.log("Acesso Negado!")
}