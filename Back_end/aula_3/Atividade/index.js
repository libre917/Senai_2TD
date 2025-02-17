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



fs.readFile('dados.json', 'utf8', (err, data) => {
  if (err) {
      console.log("Erro ao ler o arquivo: ", err);
      return;
  }
  try {
      const dados = JSON.parse(data);
      readline.question('Mudar nome: ', novoNome => {
          dados.nome = novoNome;
          const jsonData = JSON.stringify(dados, null, 2);
          fs.writeFile('dados.json', jsonData, 'utf8', (err) => {
              if (err) {
                  console.log('Erro ao escrever arquivo: ', err);
                  return;
              }
              console.log("Dados gravados com sucesso no arquivo!!!");
          });
          readline.close();
      });
  } catch (error) {
      console.log("Erro ao analisar o JSON ", error);
  }
});


 
// const jsonData = JSON.stringify(dados, null, 2);
// fs.writeFile('dados.json', jsonData, 'utf8', (err)=>{
// if (err){
//     console.log("deu erro seu macaco", err);
//     return;
// }
// console.log('Dados salvos no arquivo!')
// })


 