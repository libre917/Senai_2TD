const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Metodo GET
app.get("/", (req, res) => {
  const id = req.params.id;
  res.send("<h1>Página inicial</h1>");
});

app.get("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Detalhes do usuario com ID: ${id}`);
});

app.get("/categorias/:categoria/", (req, res) => {
  const categoria = req.params.categoria;
  res.send(`Categoria: ${categoria} `);
});
app.get("/produto/:produtoId", (req, res) => {
  const produtoId = req.params.produtoId;
  res.send(`Produto: ${produtoId}`);
});
app.get("/categorias/:categoria/produto/:produtoId", (req, res) => {
  const categoria = req.params.categoria;
  const produtoId = req.params.produtoId;
  res.send(`Categoria: ${categoria} e Produto: ${produtoId}`);
});
// Metodo POST
app.post("/produtos", (req, res) => {
  const novoProduto = req.body;
  console.log("Novo Produto:", novoProduto);
  res.status(201).send("Produto criado com sucesso!");
});
// Metodo OPTIONS
app.options("/produtos/:id", (req, res) => {
  res.header("allow", "GET, OPTIONS");
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
