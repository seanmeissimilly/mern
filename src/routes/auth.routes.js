import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Registro de usuario
 *     responses:
 *       200:
 *         description: Usuario registrado
 */
router.post("/register", register);

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Inicio de sesión de usuario
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 */
router.post("/login", login);

/**
 * @swagger
 * /api/logout:
 *   post:
 *     summary: Cierre de sesión de usuario
 *     responses:
 *       200:
 *         description: Cierre de sesión exitoso
 */
router.post("/logout", logout);

/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Perfil de usuario
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil del usuario
 */
router.get("/profile", authRequired, profile);

export default router;
