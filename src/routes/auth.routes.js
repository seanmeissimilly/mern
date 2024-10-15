import { Router } from "express";
import { register, login, logout } from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

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
router.post("/register/", validateSchema(registerSchema), register);

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Inicio de sesión de usuario
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 */
router.post("/login/", validateSchema(loginSchema), login);

/**
 * @swagger
 * /api/logout:
 *   post:
 *     summary: Cierre de sesión de usuario
 *     responses:
 *       200:
 *         description: Cierre de sesión exitoso
 */
router.post("/logout/", logout);

export default router;
