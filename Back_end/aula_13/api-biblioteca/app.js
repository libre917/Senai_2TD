import express from "express";
const app = express();
const port = 3000;
import livroRotas from "./routes/livroRotas.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Api de Biblioteca");
});

app.options("/", (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS')
    res.status(204).send()
});

app.options("/:id", (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS')
    res.status(204).send()
});

app.use("/Livros", livroRotas);

app.use((req, res) => {
  res.status(404).json({ mensagem: "Rota não encontrada" });
});

app.listen(port, () => {
  console.log(`Servidor ligado na porta http://localhost:${port}`);
});
