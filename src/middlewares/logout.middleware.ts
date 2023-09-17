import { authRepository } from '@/repositories/authRepository';
import { errors } from '@/errors/errors';
import { Request, Response, NextFunction } from 'express';

export async function validateLogout(req: Request, res: Response ,next: NextFunction){
    try {

        const session = await authRepository.findById(res.locals.userId)
        if(!session) throw errors.notFound("session")
 
        next()

    } catch (error) {
        res.status(500).send(error.message)
    }
}