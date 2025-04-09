const readline = require('readline-sync')

const num = readline.question('digite um numero: ')

e = (1+1/num)**num

console.log(e)