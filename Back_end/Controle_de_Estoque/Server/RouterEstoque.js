const express = require('express');
const fs = require('fs')
const router = express.Router();



router.get('/', (req,res)=>{
    res.json(estoques);
})
let estoques = [];
try{
    const data = fs.readFileSync('estoque.json', 'utf8');
    estoques = JSON.parse(data)
}catch (error){
    console.log('Erro ao analisar o estoque', error)
    estoques = [];
}

router.get('/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const estoque = estoques.find(p => p.id === id)
    if (estoque){
        res.json(estoque)
    } else {
        res.status(404).send('estoque não encontrado')
    }
})

router.post("/", (req, res) => {
    const novoEstoque = req.body;
    console.log("Conteúdo do novo estoque:", novoEstoque);
    res.status(201).send("\nProduto criado com sucesso!\n");
  });

module.exports = router;