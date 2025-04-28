const express = require('express');
const fs = require('fs')
const app = express()
const port = 3000;
const db = require('../DB')
const rotaEstoque = require('./RouterEstoque');
const { url } = require('inspector');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const logger = async (req, res, next) => {
  const data = new Date();
  const DataHora = `${data.toISOString()} `
const MetodoEntrada = ` ${req.method} `
const URL = ` ${req.url} `
  console.log(`\n Entrada registrada: \n Data e Hora: [${data.toISOString()}]\n Metodo HTTP: ${req.method}\n URL: ${req.url}`);
  const linha = (`{\n "DataHora":"[${data.toISOString()}]", \n"MetodoEntrada":"${req.method}", \n"URLEntrada":"${req.url}"\n}\n`)
  next();
  const [result] = await db.query("INSERT INTO registroEntradas (DataHora, metodoDeEntrada, urlEntrada) values (?,?,?)", [ DataHora, MetodoEntrada, URL]);
};

app.use(logger);
app.get('/', (req, res) => {
  // res.status(200).send('Pagina inicial do Controle de estoque')
})

app.get('/', (req, res) => {
  res.status(200).send("<h1>pagina inicial: controle de estoque")
})

app.use('/estoques', rotaEstoque)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})

// const data = new Date();
// const DataHora = `${data.toISOString()} `
// const MetodoEntrada = ` ${req.method} `
// const URL = ` ${req.url} `

// try {


//   console.log(`\n Entrada registrada: \n Data e Hora: [${data.toISOString()}]\n Metodo HTTP: ${req.method}\n URL: ${req.url}`);
//   next();
//   const [result] = await db.query("INSERT INTO registroEntradas (DataHora, metodoDeEntrada, urlEntrada) values (?,?,?)", [ DataHora, MetodoEntrada, URL]);
 
// } catch (err){
//   console.error(err);

// }