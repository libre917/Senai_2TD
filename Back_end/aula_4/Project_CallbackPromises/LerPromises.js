const fs = require('fs').promises;

fs.readFile('arquivo.txt', 'utf8')
  .then(data => {
    console.log('conteudo do arquivo:', data);
  })
  .catch(err => {
    console.error('deu erro seu primata', err);
  });
console.log('oi')