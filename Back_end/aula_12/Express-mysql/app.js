const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");

app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send("Funfou");
});

app.get("/Clientes", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT *FROM cliente");
    res.json(rows);
  } catch (err) {
    console.error(err);
  }
});
app.get("/Clientes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await db.query(`SELECT *FROM cliente WHERE id = ?`, id);
    if (rows.length < 1) {
      res.status(404).send("Erro: Cliente não encontrado ");
    }
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao obter cliente");
  }
});
app.post("/Clientes", async (req, res) => {
  const { nome, email, endereco } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO cliente (nome, email, endereco) VALUES (?,?,?) ",
      [nome, email, endereco]
    );
    res.status(201).json({ id: result.insertId, nome, email, endereco });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao adicionar cliente");
  }
});
app.put("/Clientes/:id", async(req,res)=>{
    const { id, nome, email, endereco } = req.body;
    try {
        const [result] = await 
        db.query(
          'UPDATE cliente SET nome = ?,email = ?, endereco = ? where id = ?  ',
          [nome, email, endereco, id]
        );
      if(result.affectedRows > 0){
        res.status(201).json({ id: id, nome, email, endereco });
      } else{
        res.status(404).send('Erro');
      }
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro ao excluir cliente");
    }
})
app.delete("/Clientes/:id", async ( req,res)=>{
    const id = req.body
    console.log('Deletando:', id);
    try {
        const [result] = await db.query(
            'DELETE FROM cliente WHERE id = ?', id
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
})
app.listen(port, () => {
  console.log(`Servidor funcionando na porta: http://localhost:${port}`);
});
