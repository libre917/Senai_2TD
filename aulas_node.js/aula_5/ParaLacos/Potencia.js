const readline = require('readline-sync')

let num = readline.question( 'digite um numero: ')
const potencia = readline.question('digite a potencia: ')

for ( i = 0; i <= potencia; i++){
    const resultado = num ** i
    console.log('O resultado é', resultado);
}
