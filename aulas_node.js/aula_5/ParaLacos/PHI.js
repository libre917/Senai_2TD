const readline = require('readline-sync')

const num = readline.question('digite um numero: ')
let t = 1
let con = 1
for (i = 1; con <= num; con++){
let newValue = i + t
console.log(t/i)
i = t
t = newValue

}
