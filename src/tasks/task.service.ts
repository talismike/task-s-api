import prisma from "@/prisma/prisma.service";

export class TaskService {
  static async getAllTasks() {
    try {
      const tasks = await prisma.task.findMany();
      return tasks;
    } catch (error: any) {
      throw new Error("Error al obtener tareas: " + error.message);
    }
  }

  static async getTaskById(id: string) {
    try {
      const task = await prisma.task.findUnique({ where: { id } });
      return task;
    } catch (error) {
      throw new Error("Error al obtener esta task");
    }
  }

  static async createTask(data: { title: string; description: string }) {
    try {
      const task = await prisma.task.create({
        data,
      });
      return task;
    } catch (error: any) {
      throw new Error("Error creando el usuario: " + error.message);
    }
  }

  static async updateTask(
    id: string,
    data: { title: string; description: string }
  ) {
    try {
      const task = await prisma.task.update({ where: { id }, data });
      return task;
    } catch (error) {
      throw new Error("Error al actualizar tarea");
    }
  }

  static async deleteTask(id: string) {
    try {
      const task = await prisma.task.delete({ where: { id } });
      return task;
    } catch (error) {
      throw new Error("Error al borrar la tarea");
    }
  }
}
