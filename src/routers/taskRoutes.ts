import  { Router } from "express";
import { validateSchema } from "middlewares/validateSchema.middleware";
import { authValidate } from "@/middlewares/auth.middleware";
import { taskSchema } from "@/schemas/taskSchema";
import taskController from "@/controllers/taskController";

const taskRouter = Router();

taskRouter.post('/task', authValidate, validateSchema(taskSchema), taskController.createTask);

taskRouter.get('/task/:name', authValidate, taskController.getTask);

taskRouter.get('/tasks', authValidate, taskController.getTasks);

taskRouter.put('/task/:id', authValidate, taskController.editTask);

// taskRouter.delete('/task', taskController.updateTask);

export default taskRouter;
