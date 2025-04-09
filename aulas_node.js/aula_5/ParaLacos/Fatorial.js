const readline = require('readline-sync')

const num = readline.question('digite um numero: ')
let fat = 1;
for (i = 2; i <= num; i++){
    fat = fat * i
    console.log(fat)
}