const db = require("./conexao");

const removerCliente = {
  nome: "rogerio",
};

db.query("DELETE FROM cliente where ?", removerCliente, (err, results) => {});

db.end();
