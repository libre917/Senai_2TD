const fs = require('fs');
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  

fs.readFile('dados.json', 'utf8', (err, data)=>{
if (err) throw console.log('deu ruim');
readline.question('qual aplicação você quer?\n--App1\n--App2\n--App3\n--App4 ', (aplicacao)=>{
if (aplicacao == "App1" ){
  console.log('oi')
}
if (aplicacao == "App2"){
  console.log('tchau')
}
if (aplicacao == "App3"){
  console.log('tchau')
}
if (aplicacao == "App4"){
  console.log('tchau')
}
else{
  console.log('App não existente ou a digitação foi incorreta.')
}
})
})