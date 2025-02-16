import { TaskController } from "@/tasks/task.controller";
import { Router } from "express";

const router = Router();

router.get("/", TaskController.getAllTasks);

router.get("/:id", TaskController.getTaskById);

router.post("/create", TaskController.createTask);

router.put("/update", TaskController.updateTask);

router.delete("/delete/:id", TaskController.deleteTask);

export default router;
