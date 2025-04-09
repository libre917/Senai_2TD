const readline = require('readline-sync')

const caracter = '█'
const texto = readline.question('digite uma frase: ')
const textoPic = texto.length;

function molduraUpDown(){
    for (i = 0; i< textoPic + 4; i++){
        process.stdout.write(caracter) 
    }
}


console.log()
molduraUpDown()

console.log()
console.log(caracter,texto,caracter)


molduraUpDown()