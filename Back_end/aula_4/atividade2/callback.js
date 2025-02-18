const fs = require('fs');
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  

fs.readFile('dados.json', 'utf8', (err, data)=>{
if (err) throw console.log('deu ruim');
readline.question('qual aplicação você quer?\n--App1\n--App2\n--App3\n--App4 ', aplicacao=>{

})
})