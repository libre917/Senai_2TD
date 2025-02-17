const fs = require('fs');

fs.readFile("dados.json", "utf-8", (err, data) => {
    if (err) {
      console.log("n existe", err);
      return;
    }
    try {
      const dados = JSON.parse(data);
      console.log('Dados lidos do arquivo: ', dados);
    } catch (error) {
      console.log('Erro ao analisar o arquivo JSON: ', error)
    }
  });



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('\nquer fazer alguma mudança? ', resposta =>{
    if (resposta = 'sim'){
    readline.question( 'escreva sua mudança:', mudanca=>{
    
  return;
    })
    }
    return;
})



 
// const jsonData = JSON.stringify(dados, null, 2);
// fs.writeFile('dados.json', jsonData, 'utf8', (err)=>{
// if (err){
//     console.log("deu erro seu macaco", err);
//     return;
// }
// console.log('Dados salvos no arquivo!')
// })


 