import express from "express";
import cors from 'cors'
const app = express();
const port = 3000;

import livroRotas from "./routes/livroRotas.js";
import authRotas from './routes/authRotas.js';

app.use(cors())
app.use(express.json())

app.use("/Livros", livroRotas);
app.use('/auth', authRotas)

app.get("/", (req, res) => {
  res.status(200).send("Api de Biblioteca");
});

app.use((req, res) => {
  res.status(404).json({ mensagem: "Rota não encontrada" });
});

app.listen(port, () => {
  console.log(`Servidor ligado na porta http://localhost:${port}`);
});
