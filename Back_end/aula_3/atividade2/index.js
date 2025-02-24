const fs = require("fs");

fs.readFile("Produtos.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ce errou seu primata", err);
    return;
  }
  try {
    const dados = JSON.parse(data);
    dados.produtos.forEach((produto) => {
      console.log(`nome: ${produto.nome} \npreço: ${produto.preco} \ndescrição: ${produto.descricao}\ncategoria: ${produto.preco} \n -----------------------------------------> `);
    });
  } catch (error) {
    console.log("Erro ao analisar o arquivo JSON: ", error);
  }
});
