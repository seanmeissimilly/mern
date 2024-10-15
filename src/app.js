import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import userRoutes from "./routes/users.routes.js";
import cookieParser from "cookie-parser";
import swaggerUI from "swagger-ui-express";
import swaggerSpecs from "./swagger/swagger.js";
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", tasksRoutes);
app.use("/api", userRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

export default app;
