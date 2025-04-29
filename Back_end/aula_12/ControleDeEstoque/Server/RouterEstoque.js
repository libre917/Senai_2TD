const express = require('express');
const fs = require('fs')
const router = express.Router();
const db = require("../DB");


let estoques = [];
try {
  const data = fs.readFileSync('estoque.json', 'utf8');
  estoques = JSON.parse(data)
} catch (error) {
  console.log('Erro ao analisar o estoque', error)
  estoques = [];
}
const autenticacao = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token === "ADMIN") {
    next();
  } else {
    res.status(401).send("Acesso Negado");
  }
};
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query("SELECT *FROM Estoque");
    res.json(rows);
  } catch (err) {
    console.error(err);
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const [rows] = await db.query(`SELECT * FROM Estoque WHERE id = ?`, id);
    if (rows.length < 1) {
      res.status(404).send("Erro: Cliente não encontrado ");
    }
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao obter cliente");
  }
})

router.post("/",autenticacao, async (req, res) => {
  const {nome, quantidade} = req.body;
  console.log("\nConteúdo novo no estoque: Nome do Item:", nome,'\nQuantidade:', quantidade);
  try {
    const [result] = await db.query(
      "INSERT INTO Estoque (nome, quantidade) VALUES (?,?) ",
      [nome, quantidade]
    );
    res.status(201).json({ id: result.insertId, nome, quantidade });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao adicionar cliente");
  }
}
);
router.put('/:id',autenticacao, async (req, res) => {
  const {nome, quantidade, id} = req.body;
  console.log('\nInfo inserida:', nome, quantidade, id);
  try {
    const [result] = await 
    db.query(
      'UPDATE Estoque SET nome = ?,quantidade = ? where id = ?  ',
      [nome, quantidade, id]
    );
  if(result.affectedRows > 0){
    res.status(201).json({ id: id, nome, quantidade });
  } else{
    res.status(404).send('Erro');
  }
} catch (err) {
    console.error(err);
    res.status(500).send("Erro ao atualizar cliente");
}
 
})

router.patch('/:id',autenticacao, (req, res)=>{
  const {nome, quantidade, id} = req.body;
  console.log('\nInfo inserida:', nome, quantidade, id);
  try {
    const [result] = await 
    db.query(
      'UPDATE Estoque SET nome = ?,quantidade = ? where id = ?  ',
      [nome, quantidade, id]
    );
  if(result.affectedRows > 0){
    res.status(201).json({ id: id, nome, quantidade });
  } else{
    res.status(404).send('Erro');
  }
} catch (err) {
    console.error(err);
    res.status(500).send("Erro ao atualizar cliente");
}
 
})
router.delete('/:id', autenticacao, async (req, res) => {
  const id = parseInt(req.params.id);
  console.log('Deletando:', id);
  try {
      const [result] = await db.query(
          'DELETE FROM Estoque WHERE id = ?', id
      )
      if(result.affectedRows > 0){
          res.status(204).send();
        } else{
          res.status(404).send('Erro');
        }
  } catch(err){
      console.error(err);
      res.status(500).send("Erro ao obter cliente");
  }
});

router.options("/", (req, res) => {
  res.header("allow", "GET, OPTIONS, POST");
  res.status(204).send();
});
router.options("/:id", (req, res) => {
  res.header("allow", "GET, OPTIONS, PUT, PATCH, DELETE");
  res.status(204).send();
});
module.exports = router;