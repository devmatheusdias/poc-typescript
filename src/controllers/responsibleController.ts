import {Request, Response} from "express";

async function createResponsible(req: Request, res: Response){

    const { body } = req;
    const { name, email, password} = body;

    res.send(`nome: ${name} \n email: ${email} \n password: ${password}`)
}

async function deleteResponsible(req: Request, res: Response) {
    const { query } = req;
    const { name } = query;

    res.send(`name: ${name}`)
}

const responsibleController = { createResponsible, deleteResponsible};

export default responsibleController;