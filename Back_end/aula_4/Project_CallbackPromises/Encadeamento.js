const fs = require('fs').promises;

fs.readFile('arquivo.txt', 'utf8')
  .then(data => {
    console.log('conteudo do arquivo:', data);
    return data.toUpperCase();
    return data.toLowerCase()
  })
  .then(dataMaiuscula =>{
    console.log(dataMaiuscula)
  })
  .catch(err => {
    console.error('deu erro seu primata', err);
  });
