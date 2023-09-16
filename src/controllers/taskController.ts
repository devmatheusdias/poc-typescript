import {Request, Response} from "express";
import { createTask } from "@/protocols/taskProtocol";
import { taskService } from "@/services/taskService";
import httpStatus from "http-status"

async function createTask(req: Request, res: Response){
    const {name, description, date, responsible_id, status} = req.body as createTask;

    await taskService.create(name, description, date, responsible_id, status);
    res.sendStatus(httpStatus.CREATED)
  
}

async function getTask(req: Request, res: Response) {
    const { query } = req;
    const { name } = query;

    res.send(`name: ${name}`)
}

async function getTasks(req: Request, res: Response) {
    const { query } = req;
    const { name } = query;

    res.send(`name: ${name}`)
}

async function updateTask(req: Request, res: Response) {
    const { query } = req;
    const { name } = query;

    res.send(`name: ${name}`)
}

async function deleteTask(req: Request, res: Response) {
    const {name} = req.body as createTask;

    await taskService.deleteTask(name);
    res.sendStatus(httpStatus.OK)
}
    

const taskController = { createTask, getTask, getTasks, updateTask, deleteTask};

export default taskController;