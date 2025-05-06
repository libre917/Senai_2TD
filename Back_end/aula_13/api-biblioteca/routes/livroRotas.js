import express from 'express'
import { listarLivrosController, obterLivroPorIdController } from '../controllers/LivroController.js'
const router = express.Router();
const port = 3000

router.get('/', listarLivrosController);
router.get('/:id', obterLivroPorIdController);

export default router