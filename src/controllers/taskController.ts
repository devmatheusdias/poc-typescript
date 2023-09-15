import {Request, Response} from "express";
import { Task } from "@/protocols/taskProtocol";

async function createTask(req: Request, res: Response){

    
    const {name, description, date, responsible, status} = req.body as Task

    res.send(`
        name: ${name} \n 
        description: ${description} \n 
        date: ${date}, \n 
        responsible: ${responsible}, \n 
        status: ${status}`
    )
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
    const { query } = req;
    const { name } = query;

    res.send(`name: ${name}`)
}

const taskController = { createTask, getTask, getTasks, updateTask, deleteTask};

export default taskController;