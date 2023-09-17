import { errors } from "@/errors/errors";
import { authRepository } from "@/repositories/authRepository";
import { Request, Response, NextFunction } from "express";

export async function authValidate(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    const token = authorization?.replace('Bearer', '').trim();
    if(!token) throw errors.unauthorized()

    const session = await authRepository.getToken(token);
    if(!session) throw errors.notFound("token")

    res.locals.token = session.token;
    res.locals.userID = session.userID

    next()
}