const readline = require('readline-sync')

const num = readline.question('digite um numero: ')

e = (1+1/num)**num
if(e == 2.71){
console.log("o Resultado é Euler:", e)
}else{
    console.log(e)
}