const express = require('express');
const fs = require('fs')
const router = express.Router();



let estoques = [];
try {
  const data = fs.readFileSync('estoque.json', 'utf8');
  estoques = JSON.parse(data)
} catch (error) {
  console.log('Erro ao analisar o estoque', error)
  estoques = [];
}

router.get('/', (req, res) => {
  res.json(estoques);
})

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const estoque = estoques.find(p => p.id === id)
  if (estoque) {
    res.json(estoque)
  } else {
    res.status(404).send('estoque não encontrado')
  }
})

router.post("/", (req, res) => {
  const novoEstoque = req.body;
  console.log("\nConteúdo novo do estoque:", novoEstoque);
  res.status(201).send("\nEstoque para o Produto criado com sucesso!\n");
  fs.readFile("estoque.json", "utf8", (err, data) => {
    if (err) {
      console.log("Erro", err);
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
      console.log("Erro ao analisar o estoque: ", error);
    }
  });
}
);
router.put('/:id', (req, res) => {
  const estoqueAtualizado = req.body;
  console.log('\nInfo inserida:', estoqueAtualizado);
  fs.readFile("estoque.json", "utf8", (err, data) => {
    if (err) {
      console.log("Erro", err);
      return;
    }
    try {
        const dados = JSON.parse(data);
        const dadoAtualizado = req.body;
        if( dadoAtualizado.id == null && dadoAtualizado.nome == null && dadoAtualizado.quantidade == null){
          console.log('Todos os dados devem ser alterados')
          res.status(400).send('Erro: Dados fornecidos incompletos, todos os dados devem ser alterados')
        }
        const index = dados.findIndex(item => item.id === dadoAtualizado.id)
        if (index !== -1) {
          dados[index] = { ...dados[index], ...dadoAtualizado }; 
          const JsonAtualizado = JSON.stringify(dados);
          fs.writeFile("../Server/estoque.json", JsonAtualizado, (err) => {
            if (err) throw err;
            console.log("Dados atualizados com sucesso!");
            res.status(200).send('\nEstoque atualizado com sucesso!\n');
          });
        } else {
          console.log("Erro: Item com o ID fornecido não encontrado.");
        }
      } catch (error) {
        console.log("Erro ao analisar o estoque: ", error);
      }
  });
})

router.patch('/:id', (req, res)=>{
  const estoqueAtualizado = req.body;
  console.log('\nInfo inserida:', estoqueAtualizado);
  fs.readFile("estoque.json", "utf8", (err, data) => {
    if (err) {
      console.log("Erro", err);
      return;
    }
    try {
        const dados = JSON.parse(data);
        const dadoAtualizado = req.body;
        const index = dados.findIndex(item => item.id === dadoAtualizado.id)
        if (index !== -1) {
          dados[index] = { ...dados[index], ...dadoAtualizado }; 
          const JsonAtualizado = JSON.stringify(dados);
          fs.writeFile("../Server/estoque.json", JsonAtualizado, (err) => {
            if (err) throw err;
            console.log("Dado(s) atualizados com sucesso!");
            res.status(200).send('\nEstoque atualizado com sucesso!\n');
          });
        } else {
          console.log("Erro: Item com o ID fornecido não encontrado.");
          res.status(400).send('Erro: ID não existente')
        }
      } catch (error) {
        console.log("Erro ao analisar o estoque: ", error);
      }
  });
})

router.delete('/:id', (req,res)=>{
  const estoqueAtual = req.body;
  console.log('Deletando:', estoqueAtual)
  fs.readFile("estoque.json", "utf8", (err, data)=>{
    if (err){
      console.error("Erro", err)
      return;
    }
    try{
      const dados = JSON.parse(data);
      const dadoASerDeletado = req.body.id;
      const index = dados.findIndex(item => item.id === dadoASerDeletado)
      if( index !== -1) {
        dados.splice(index, 1)
        const JsonAtualizado = JSON.stringify(dados)
        fs.writeFile("../Server/estoque.json", JsonAtualizado, (err) => {
          if (err) throw err;
          console.log("Estoque deletado com sucesso");
          res.status(200).send('\nRemoção de estoque bem-sucedida!\n');
        });
      } else {
        console.log("Erro: Item com o ID fornecido não encontrado.");
        res.status(400).send('Erro: ID não existente')
      }
    } catch (error) {
      console.log("Erro ao analisar o estoque: ", error);
    }
  } )
})
router.options("/", (req, res) => {
  res.header("allow", "GET, OPTIONS, POST");
  res.status(204).send();
});
router.options("/:id", (req, res) => {
  res.header("allow", "GET, OPTIONS, PUT, PATCH, DELETE");
  res.status(204).send();
});
module.exports = router;