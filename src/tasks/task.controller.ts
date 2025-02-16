import { json, type Request, type Response } from "express";
import { TaskService } from "./task.service";

export class TaskController {
  static async getAllTasks(req: Request, res: Response): Promise<any> {
    try {
      const tasks = await TaskService.getAllTasks();
      return res.status(200).json({ tasks });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getTaskById(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    try {
      const task = await TaskService.getTaskById(id);

      if (!task) {
        return res.status(404).json({ message: "Tarea no encontrada" });
      }
      return res.status(201).json(task);
    } catch (error) {
      return res.status(500).json({ message: "Error del servidor" });
    }
  }

  static async createTask(req: Request, res: Response): Promise<any> {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "El titulo y la descripcion son requeridos" });
    }

    try {
      const newTask = await TaskService.createTask({ title, description });
      return res.status(201).json(newTask);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async updateTask(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const data = { title, description, completed };

    try {
      const task = await TaskService.updateTask(id, data);
      return res.status(201).json({ message: "Tarea actualizada", task });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deleteTask(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    try {
      const task = await TaskService.deleteTask(id);
      return res.status(201).json({ message: "Tarea borrada", task });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}
