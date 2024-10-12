import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createTask,
  getTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controller.js";
const router = Router();

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Obtiene todas las tareas *
 *     responses:
 *       200:
 *         description: Lista de tareas
 */
router.get("/tasks", authRequired, getTasks);

router.get("/tasks/:id", authRequired, getTask);
router.delete("/tasks/:id", authRequired, deleteTask);
router.put("/tasks/:id", authRequired, updateTask);
router.post("/tasks", authRequired, createTask);

export default router;
