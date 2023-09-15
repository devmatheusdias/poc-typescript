import  { Router } from "express";
import { validateSchema } from "middlewares/validateSchema.middleware";
import taskController from "@/controllers/taskController";
const taskRouter = Router();

taskRouter.post('/task', taskController.createTask);

taskRouter.get('/task', taskController.getTask);

taskRouter.get('/tasks', taskController.getTasks);

taskRouter.put('/task', taskController.getTasks);

taskRouter.delete('/task', taskController.deleteTask);

export default taskRouter;
