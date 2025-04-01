const express = require('express');
const fs = require('fs')
const app = express()
const port = 3000;
const rotaEstoque = require('./RouterEstoque')
const rotaAdmin = require('./RouterAdmin')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const logger = (req, res, next) => {
    const data = new Date();
    console.log(`[${data.toISOString()}] ${req.method} ${req.url}`);
    const linha = (`{\n "DataHora":"[${data.toISOString()}]", \n"MetodoEntrada":"${req.method}", \n"URLEntrada":"${req.url}"\n}\n`)
    next();
    fs.appendFile('RegitroEntradas.txt', linha, (err)=>{
      if (err) throw err;
      console.log('Entrada registrada');
    })
  };
  
  app.use(logger);  
  app.get('/', (req,res)=>{
    res.status(200).send('Pagina inicial do Controle de estoque')
  })


  app.get('/', (req, res)=>{
    res.status(200).send("<h1>pagina inicial: controle de estoque")
  })


  app.use('/estoques', rotaEstoque)
  app.use('/admin', rotaAdmin)



app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})