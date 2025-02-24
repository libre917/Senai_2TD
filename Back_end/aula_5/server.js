const http = require('http');


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
const server = http.createServer((req, res) =>{
    //  console.log(`Requisição recebida e ignorada com sucesso: ${req.method} ${req.url}`);
    //  res.writeHead(200, {'Content-type': 'text/html'});
    //  res.end('<h1>Servidor Web simples rodando</h1>');
    const {method, url} = req;

    console.log(`Requisição recebida e ignorada com sucesso: ${method} ${url}`);

    if (url === '/' && method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>                             SUBINOONIBUS</h1>')
    }else if(url === '/produtos' && method === 'GET'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(produtos))
    }else if(url.startsWith('/produtos/') && method === 'GET'){
        const id = parseInt(url.split('/')[2]);
        const produto = produtos.find(p => p.id === id);
        if (produto){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(produto))
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end('Poduto não encontrado')
    }
    }
})

const port = 3000;

server.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
})