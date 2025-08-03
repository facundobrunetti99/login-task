import express from "express";
import morgan from "morgan";
import authRoutes from "../src/routers/auth.routes.js";
import cookieParser from "cookie-parser";
import taskRoutes from "../src/routers/task.routes.js";
import projectRoutes from "../src/routers/project.routes.js";
import epicRoutes from "../src/routers/epic.routes.js";
import storyRoutes from "../src/routers/story.router.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use((req, res, next) => {
  console.log(`Petición recibida: ${req.method} ${req.path}`);
  next();
});

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", epicRoutes);
app.use("/api", projectRoutes);
app.use("/api", storyRoutes);

export default app;
