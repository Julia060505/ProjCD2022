 rs = require ('readline-sync');

 palavra = rs.question('Ola, digite uma palavra:')

palavra_final = ""

for(let i=0; i != palavra.length; i++){
    switch(palavra.charAt(i).toLowerCase()){
        case "a":
            palavra_final +="A"
            break
            case "e":
            palavra_final +="E"
            break
            case "i":
            palavra_final +="I"
            break
            case "o":
            palavra_final +="O"
            break
            case "u":
            palavra_final +="U"
            break
            default:
                palavra_final += palavra.charAt(i).toLowerCase()
    }
    
}

console.log(palavra_final)