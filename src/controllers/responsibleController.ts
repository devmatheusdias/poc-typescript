import {Request, Response} from "express";
import { createResponsible } from "@/protocols/responsibleProtocol";
import { responsibleService } from "@/services/responsibleService";
import httpStatus from "http-status";

async function createResponsible(req: Request, res: Response){

    const {name, email, password } = req.body as createResponsible;

    await responsibleService.create(name, email, password);
    res.sendStatus(httpStatus.CREATED)

   
}

async function deleteResponsible(req: Request, res: Response) {
    const { query } = req;
    const { name } = query;

    res.send(`name: ${name}`)
}

const responsibleController = { createResponsible, deleteResponsible};

export default responsibleController;