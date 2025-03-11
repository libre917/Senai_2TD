const express = require("express");
const router = express.Router();

const autenticacao = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token === "PERMITIDO") {
    next();
  } else {
    res.status(401).send("Acesso não permitido");
  }
};

router.get("/", autenticacao, (req, res) => {
  res.status(200).send("Página de ADM");
});

router.get("/:id", autenticacao, (req, res) => {
    const id = req.params.id;
    res.status(200).send(`ADM com id: ${id}` );
  });
  router.options("/", (req, res) => {
    res.header("allow", "GET, OPTIONS");
    res.status(204).send();
  });
  router.options("/:id", (req, res) => {
    res.header("allow", "GET, OPTIONS");
    res.status(204).send();
  });
module.exports = router;
