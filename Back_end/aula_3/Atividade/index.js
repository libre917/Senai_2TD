const { rejects } = require("assert");
const { promises } = require("dns");
const fs = require("fs");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

fs.readFile("dados.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ce errou seu primata", err);
    return;
  }
  try {
    const dados = JSON.parse(data);
    console.log("Dados lidos do arquivo:\n", dados);
    readline.question("Qual o seu nome? ", (nome) => {
      dados.nome = nome;
      readline.question("Qual o seu sobrenome? ", (sobrenome) => {
        dados.sobrenome = sobrenome;
        readline.close();
        const jsonData = JSON.stringify(dados, null, 2);
        fs.writeFile("dados.json", jsonData, "utf8", (err) => {
          if (err) {
            console.log("deu erro seu macaco", err);
            return;
          }
          console.log("Dados salvos no arquivo!");
        });
      });
    });
  } catch (error) {
    console.log("Erro ao analisar o arquivo JSON: ", error);
  }
});
