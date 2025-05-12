import express from "express";
import {
  listarLivrosController,
  obterLivroPorIdController,
  criarLivroController,
  atualizarLivroController,
  excluirLivroController,
} from "../controllers/LivroController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads/"));
  },
  filename: (req, file, cb) => {
    const nomeArquivo = `${Date.now()}-${file.originalname}`;
    cb(null, nomeArquivo);
  },
});

const upload = multer ({ storage: storage });

const router = express.Router();
const port = 3000;

router.get("/", listarLivrosController);
router.get("/:id", obterLivroPorIdController);
router.post("/", authMiddleware, upload.single('capa'), criarLivroController);
router.put('/:id', authMiddleware, upload.single('capa'), atualizarLivroController);
router.delete('/:id', authMiddleware, excluirLivroController)

router.options("/", (req, res) => {
  res.setHeader("Allow", "GET, OPTIONS");
  res.status(204).send();
});

router.options("/:id", (req, res) => {
  res.setHeader("Allow", "GET, OPTIONS");
  res.status(204).send();
});

export default router;
