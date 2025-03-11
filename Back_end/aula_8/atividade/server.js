const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const rotaUsers = require("./rota_users");
const rotaProducts = require("./rota_produtos");
const rotaAdmin = require("./rota_admin");

const logger = (req, res, next) => {
  const data = new Date();
  console.log(`[${data.toISOString()}] ${req.method} ${req.url}`);
  const linha = (`[${data.toISOString()}] ${req.method} ${req.url}\n`)
  next();
  fs.appendFile('log.txt', linha, (err)=>{
    if (err) throw err;
    console.log('Entrada registrada');
  })
};

app.use(logger);


app.use("/users", rotaUsers);
app.use("/products", rotaProducts);
app.use("/admin", rotaAdmin);


app.get("/", (req, res) => {
  res.status(200).send("<h1>Tudo funcionando</h1>");
});

app.listen(port, () => {
  console.log(`Servidor funfando em http://localhost:${port}`);
});