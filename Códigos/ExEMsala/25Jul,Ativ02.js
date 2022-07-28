const readline = require ('readline');

const Interface = readline.createInterface({input:process.stdin,output:process.stdout});

//   QUESTÃO 2 (25/07)

let menor = 0
let maior = 0

Interface.question("Digite o primeiro valor:", (num1)=>
{
    Interface.question("Digite o segundo valor:", (num2)=>
    {

        if(num1>num2)
        {
            maior = num1
            menor = num2
        }else
        {
            maior = num2
            menor = num1
        } for(i=menor;menor<=maior;menor++)
        {
            console.log(menor)
        }
    })

})