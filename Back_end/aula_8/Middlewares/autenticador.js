const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.status(200).send(`<h1>Ta tudo certo</h1>`)
})

const autenticar = (req, res, next)=>{
    // Simulação de autenticação: NUNCA usar em produção!!!
    const token = req.headers['authorization']
    if (token === 'SEGREDO' ){
        next() //se autenticado
    } else {
        res.status(401).send('Acesso negado/Não autorizado')
    }
}

app.get('/admin', autenticar, (req, res)=>{
    res.status(200).send('Página de Administração')
})

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
})