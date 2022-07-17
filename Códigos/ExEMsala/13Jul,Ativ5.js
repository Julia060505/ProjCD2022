const readline = require ('readline');

const face = readline.createInterface({input:process.stdin,output:process.stdout});

// QUESTÃO 5 (13/07)

let crescer = []

face.question("Primeiro numero:", (n1) => {

    face.question("Segundo numero:", (n2) => {

        face.question("Terceiro numero:", (n3) => {
             
            crescer.push(n1)
            crescer.push(n2)
            crescer.push(n3)

            crescer.sort()

            console.log(crescer)
        })
    })
})

// fiz o e  xercício com base no código da Paucia, pois tive dúvida e só entendi observando