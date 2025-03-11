const express = require("express");
const app = express();
const port = 3000;
const rotasUsuarios = require('./rotas_Users')
const rotasProducts = require('./rotas_Products')
const rotasCatogories = require('./rotas_Categories')

app.use('/usuarios', rotasUsuarios);
app.use('/produtos', rotasProducts);
app.use('/categorias', rotasCatogories)

app.get("/", (req, res) => {
  res.status(200).send("<h1>Página inicial</h1>");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
