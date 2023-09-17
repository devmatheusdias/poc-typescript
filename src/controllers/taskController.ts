import {Request, Response} from "express";
import { Task, createTask } from "@/protocols/taskProtocol";
import { taskService } from "@/services/taskService";
import httpStatus from "http-status"

async function createTask(req: Request, res: Response){
    const {name, description, date, status} = req.body as createTask;

    const responsible_id = res.locals.userID;
    const token = res.locals.token

    
    await taskService.create(name, description, date, responsible_id, status, token);
    res.sendStatus(httpStatus.CREATED)
  
}

async function getTask(req: Request, res: Response) {
    const { name } = req.params as {name: string}

    const responsible_id = res.locals.userID;
    const token = res.locals.token

    await taskService.getTask(name, responsible_id, token)

    res.sendStatus(httpStatus.OK)
}

async function getTasks(req: Request, res: Response) {
    
    const responsible_id = res.locals.userID;
    const token = res.locals.token

    await taskService.getAllTasks(responsible_id, token);
    res.sendStatus(httpStatus.OK)

}

async function editTask(req: Request, res: Response) {
    const { name, description, date, status } = req.query
    const {id} = req.params

    const responsible_id = res.locals.userID;
    const token = res.locals.token

    await taskService.edit( Number(id), name as string | undefined, description as string | undefined, date as string | undefined, status as string | undefined, responsible_id, token );
    res.sendStatus(httpStatus.OK)
}

// async function updateTask(req: Request, res: Response) {
//     const {name} = req.body as createTask;

//     await taskService.updateTask(name);
//     res.sendStatus(httpStatus.OK)
// }
    

const taskController = { createTask, getTask, getTasks, editTask};

export default taskController;