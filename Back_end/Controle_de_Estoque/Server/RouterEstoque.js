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

router.post("/", (req, res) => {
    const novoEstoque = req.body;
    console.log("Conteúdo do novo estoque:", novoEstoque);
    res.status(201).send("\nEstoque para o Produto criado com sucesso!\n");
          fs.readFile("estoque.json", "utf-8", (err, data) => {
            if (err) {
              console.log("ce errou seu primata", err);
              return;
            }
            try {
              const dados = JSON.parse(data);
              const dadoNovo = req.body;
              dados.push(dadoNovo);
              var JsonAtualizado = JSON.stringify(dados);
              fs.writeFile("../Server/estoque.json", JsonAtualizado, (err) => {
                if (err) throw err;
              });
            } catch (error) {
              console.log("Erro ao analisar o arquivo JSON: ", error);
            }
          });
        }
  );

module.exports = router;