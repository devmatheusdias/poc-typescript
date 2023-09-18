import { errors } from "@/errors/errors";
import bcrypt from "bcrypt";
import {v4 as uuid} from 'uuid';
import { authRepository } from "@/repositories/authRepository";

async function signUp(name: string, email: string, password: string) {
    const responsible = await authRepository.findByEmail(email);
    if(responsible) throw errors.conflict("responsible");

    const passwordHash =  bcrypt.hashSync(password, 10);

    await authRepository.signUp(name, email, passwordHash);
}

async function signIn(email: string, password: string, userId: number) {
    
    const token = uuid();
    await authRepository.signIn(userId, token);
}

async function logout(userId:number) {
    await authRepository.logout(userId)
    
}

export const authService = {signUp, signIn, logout}