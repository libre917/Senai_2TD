const express = require('express');
const fs = require('fs')
const router = express.Router();



let estoques = [];
try{
    const data = fs.readFileSync('estoque.json', 'utf8');
    estoques = JSON.parse(data)
}catch (error){
    console.log('Erro ao analisar o estoque', error)
    estoques = [];
}

router.get('/', (req,res)=>{
    res.json(estoques);
})

router.get('/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const estoque = estoques.find(p => p.id === id)

    if (estoque){
        res.json(estoque)
    } else {
        res.status(404).send('estoque não encontrado')
    }
})

module.exports = router;