const readline = require('readline-sync');

// const num = Number(readline.question('digite um numero: ')) 


// for ( let i=0 ; i <= 10 ; i++){
//     console.log(`${num} X ${i} = ${num * i}`)
// }

// for (let i = -1 ; i <= 11; i += 3){
//     console.log(i)
// }

// let i = 0
// while (i<= 10){
//     console.log(`${num} X ${i} = ${num * i}`)
//     i++
// }

let num;

while (true){
    num =  Number(readline.question('digite um numero: ')) 
    if (num >= 0) {
        break
    }   
}
