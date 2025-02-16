# 📌 API de Tareas sencilla con ExpressJS, Prisma y PostgreSQL

Este proyecto es una API REST de gestión de tareas hecha con **ExpressJS**, **Prisma** y **PostgreSQL**. Permite realizar operaciones CRUD básicas sobre tareas.

## 🔥 Endpoints

### 📌 Obtener todas las tareas

```http
GET /tasks
```

📤 **Respuesta:**

```json
{
  "tasks": [
    {
      "id": "1",
      "title": "Mi primera task",
      "description": "Esta task fue la primera",
      "completed": false
    },
    {
      "id": "2",
      "title": "Mi segunda task",
      "description": "Esta task fue la segunda",
      "completed": true
    }
  ]
}
```

### 📌 Obtener una tarea por ID

```http
GET /tasks/:id
```

📤 **Respuesta:**

```json
   {
      "id": "2",
      "title": "Mi segunda task",
      "description": "Esta task fue la segunda",
      "completed": true
    }
```

### 📌 Crear una nueva tarea

```http
POST /tasks/create
```

📥 **Cuerpo:**

```json
{
  "title": "Nueva tarea",
  "description": "Descripción de la tarea"
}
```

📤 **Respuesta:**

```json
{
  "id": 3,
  "title": "Nueva tarea",
  "description": "Descripción de la tarea",
  "completed": false
}
```

### 📌 Actualizar una tarea

```http
PUT /tasks/update/:id
```

📥 **Cuerpo:**

```json
{
  "title": "Tarea actualizada",
  "description": "Nueva descripción",
  "completed": true
}
```

📤 **Respuesta:**

```json
{
  "id": 3,
  "title": "Tarea actualizada",
  "description": "Nueva descripción",
  "completed": true
}
```

### 📌 Eliminar una tarea

```http
DELETE /tasks/delete/:id
```

📤 **Respuesta:**

```json
{
  "message": "Tarea eliminada"
}
```

## 🛠 Tecnologías Usadas

- **ExpressJS** - Framework backend en Node.js
- **Prisma** - ORM para manejo de base de datos
- **PostgreSQL** - Base de datos ligera
