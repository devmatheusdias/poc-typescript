import {Request, Response} from "express";
import { createResponsible } from "@/protocols/responsibleProtocol";
import { authService } from "@/services/authService";
import httpStatus from "http-status";

async function signUp(req: Request, res: Response){

    const {name, email, password } = req.body as createResponsible;

    await authService.signUp(name, email, password);
    res.sendStatus(httpStatus.CREATED)

}

async function signIn(req: Request, res: Response) {
   const {email, password} = req.body as createResponsible;

   await authService.signIn(email, password, res.locals.userId)
   res.sendStatus(httpStatus.OK)

}

async function logout(req: Request, res: Response) {
    
    await authService.logout(res.locals.userId)
}

const responsibleController = { signUp, signIn, logout};

export default responsibleController;