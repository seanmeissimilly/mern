import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getUsers,
  deleteUser,
  updateUser,
  profile,
} from "../controllers/users.controller.js";

const router = Router();

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
router.get("/profile/", authRequired, profile);
router.get("/user/", authRequired, getUsers);
router.put("/user/:id/", authRequired, updateUser);
router.delete("/user/:id/", authRequired, deleteUser);

export default router;
