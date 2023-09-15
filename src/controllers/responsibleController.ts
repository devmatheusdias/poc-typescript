import {Request, Response} from "express";
import { Responsible } from "@/protocols/responsibleProtocol";

async function createResponsible(req: Request, res: Response){

    const {name, email, password } = req.body as Responsible

    res.send(`
        name: ${name} \n
        email: ${email} \n
        password: ${password}
    `)
}

async function deleteResponsible(req: Request, res: Response) {
    const { query } = req;
    const { name } = query;

    res.send(`name: ${name}`)
}

const responsibleController = { createResponsible, deleteResponsible};

export default responsibleController;