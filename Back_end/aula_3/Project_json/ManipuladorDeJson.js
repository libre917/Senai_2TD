const fs = require('fs');

fs.readFile("dados.json", "utf-8", (err, data) => {
    if (err) {
      console.log("ce errou seu primata", err);
      return;
    }
    try {
      const dados = JSON.parse(data);
      console.log(dados.nome); /*forma 1*/
      console.log(dados['nome']);/*forma 2*/ 

      console.log(dados.endereco.rua)

    //   console.log(dados.telefones[0])
    dados.telefones.forEach(telefone => {
        console.log(`telefone: ${telefone}`)
    });
    } catch (error) {
      console.log('Erro ao analisar o arquivo JSON: ', error)
    }
  });
  