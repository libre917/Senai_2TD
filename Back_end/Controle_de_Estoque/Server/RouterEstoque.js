const express = require('express');
const fs = require('fs')
const router = express.Router();


router.get('/', (req,res)=>{
    res.status(200).send(`<body style="background-color:black; color:white;"><h1>Página inicial</h1></body>`)
})
let estoques = [];
try{
    const data = fs.readFileSync('estoque.json', 'utf8');
    estoques = JSON.parse(data)
}catch (error){
    console.log('Erro ao analisar o estoque', error)
    estoques = [];
}

router.get('/estoques', (req,res)=>{
    res.json(estoques);
})

router.get('/estoques/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const estoque = estoques.find(p => p.id === id)

    if (estoque){
        res.json(estoque)
    } else {
        res.status(404).send('estoque não encontrado')
    }
})

module.exports = router;