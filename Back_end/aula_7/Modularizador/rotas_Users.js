const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Lista de usuarios');

})
router.get('/:id', (req,res)=>{
    const id = req.params.id;
    res.send(`Usuario com Id: ${id}`)
})
router.post("/", (req, res) => {
    const novoProduto = req.body;
    console.log("Novo Usuario:", novoProduto);
    res.status(201).send("Usuario criado com sucesso!");
  });
router.options('/', (req, res)=>{
    res.header('Allow', 'GET, OPTIONS');
    res.status(204).send();
})
router.options("/:id", (req, res) => {
    res.header("allow", "GET, OPTIONS");
    res.status(204).send();
  });
  

module.exports = router;