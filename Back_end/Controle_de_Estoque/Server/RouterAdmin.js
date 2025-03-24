const express = require("express");
const router = express.Router();

const autenticacao = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token === "ADMIN") {
    next();
  } else {
    res.status(401).send("Acesso Negado");
  }
};
router.get('/', autenticacao, (req,res)=>{
    res.status(200).send("Página inicial: ADM")
});

module.exports = router