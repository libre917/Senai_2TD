const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('qual o seu nome? ', nome =>{
    console.log(`ola, ${nome}!`);
  
})

