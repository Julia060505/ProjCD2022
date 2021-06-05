let nome = "Júlia"
let primeiroSobrenome = "Carneiro"
let segundoSobrenome = "Novaes"
let informacao = "é aluna do Campinho!"

/*   SEM INTERPOLAÇÃO:

let nomeCompleto = nome + " " + primeiroSobrenome + " "
+ segundoSobrenome + " é aluna do Campinho!"*/

// USANDO INTERPOLAÇÃO:

let nomeCompleto = `${nome} ${primeiroSobrenome} ${segundoSobrenome} ${informacao}`

console.log(nomeCompleto)