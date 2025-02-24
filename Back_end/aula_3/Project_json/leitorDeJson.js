const fs = require("fs");

fs.readFile("dados.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ce errou seu primata", err);
    return;
  }
  try {
    const dados = JSON.parse(data);
    console.log('Dados lidos do arquivo:\n', dados);
  } catch (error) {
    console.log('Erro ao analisar o arquivo JSON: ', error)
  }
});
