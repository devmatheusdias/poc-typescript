import {Request, Response} from "express";

async function createTask(req: Request, res: Response){

    const { body } = req;
    const { name, email, password} = body;

    res.send(`nome: ${name} \n email: ${email} \n password: ${password}`)
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