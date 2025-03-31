const express = require('express');
const fs = require('fs')
const router = express.Router();
const axios = require('axios')


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

router.axios.post('http://localhost:3000/',{
id: 1,
nome:'Computadores',
quantidade:29
})
.then(response=>{
console.log('Novo ToDo criado:')
})
.catch(error=>{
console.log(error)
})

module.exports = router;