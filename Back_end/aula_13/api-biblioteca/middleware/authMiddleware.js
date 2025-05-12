import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/jwr.js";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .json({ mensagem: "Não autorizado: token não fornecido" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.usuarioId = decoded.indexOf;
    next();
  } catch (err) {
    return res.status(403).json({ mensagem: "Token não autorizado" });
  }
};

export default authMiddleware;
