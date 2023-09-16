import {Request, Response} from "express";
import { createResponsible } from "@/protocols/responsibleProtocol";
import { authService } from "@/services/authService";
import httpStatus from "http-status";

async function signUp(req: Request, res: Response){

    const {name, email, password } = req.body as createResponsible;

    await authService.create(name, email, password);
    res.sendStatus(httpStatus.CREATED)

   
}

async function deleteResponsible(req: Request, res: Response) {
    const { query } = req;
    const { name } = query;

    res.send(`name: ${name}`)
}

const responsibleController = { signUp, deleteResponsible};

export default responsibleController;