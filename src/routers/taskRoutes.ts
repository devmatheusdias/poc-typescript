import  { Router } from "express";
import { validateSchema } from "middlewares/validateSchema.middleware";
import { taskSchema } from "@/schemas/taskSchema";
import taskController from "@/controllers/taskController";
const taskRouter = Router();

taskRouter.post('/task', validateSchema(taskSchema),taskController.createTask);

taskRouter.get('/task/:name', taskController.getTask);

taskRouter.get('/tasks', taskController.getTasks);

taskRouter.put('/task', taskController.getTasks);

taskRouter.delete('/task', taskController.deleteTask);

export default taskRouter;
