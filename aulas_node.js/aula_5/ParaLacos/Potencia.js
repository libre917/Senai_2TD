const readline = require('readline-sync')

let num = readline.question( 'digite um numero: ')
const potencia = readline.question('digite a potencia: ')
let a = 0
for ( i = 0; i <= potencia; i++){
    const resultado = num ** i
    console.log(`${num} elevado à ${a} é igual á: ${resultado}`);
    a++

}

