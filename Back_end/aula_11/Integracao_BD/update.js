const db = require("./conexao");

const novoEmail = {
  email: "laaaa@gmail.com",
};

db.query(
  'UPDATE cliente SET ? where nome = "rogerio"  ',
  novoEmail,
  (err, results) => {
    console.log(results)
  }
);

db.end();
