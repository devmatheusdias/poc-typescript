import { authRepository } from '@/repositories/authRepository';
import { errors } from '@/errors/errors';
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt'

export async function validateSignin(req: Request, res: Response ,next: NextFunction){
    const {email, password} = req.body;

    try {

        const responsible = await authRepository.findByEmail(email);
        if(!responsible) throw errors.notFound("responsible");

    
        if(!bcrypt.compareSync(password, responsible.password)) throw errors.invalidPassword();
        res.locals.userId = responsible.id

        next()

    } catch (error) {
        res.status(500).send(error.message)
    }
}