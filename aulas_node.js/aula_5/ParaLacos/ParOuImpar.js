const readline = require('readline-sync')

function ParOuImpar(){
const num = readline.question('digite um numero: ')
num % 2 === 0 ? console.log('par') : console.log('impar');
const resposta = readline.question('deseja repetir (S/N)?  ')
if(resposta == 'n' || resposta == 'N'){
    console.log('Programa finalizado')
} else if(resposta == 's' || resposta == 'S'){
    ParOuImpar()
} else {
    console.log('Valor digitado invalido, finalizando programa')
}
}
ParOuImpar()
