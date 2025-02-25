const express = require('express');
const app = express();
const port = 3000;


const produtos = [
    {
        id: 1,
        nome: 'leite',
        preço: 13.00
    },
    {
        id: 2,
        nome: 'leite de boi',
        preço: 13.00
    },
    {
        id: 3,
        nome: 'leite de 20 anos',
        preço: 13.00
    }
]

app.get('/', (req, res)=>{
    res.send('Hello, world!');
});
app.get('/produtos', (req,res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(produtos))
})
app.get('/produtos/:id', (req,res)=>{
    const id = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === id);
  res.json(produto)
})
app.post('/contato', (req, res)=>{
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', () => {
        console.log('Dados recebidos:', body)
        res.writeHead(201, { 'Content-Type': 'text/plain' });
        res.end('Dados de contato recebidos porraaaaaaaa!!!');
    })
})
app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})
