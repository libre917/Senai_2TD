const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
  res.status(200).send("<h1>Página de produtos</h1>");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).send(`Produto com id: ${id}`);
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
