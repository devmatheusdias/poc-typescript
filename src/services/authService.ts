import { errors } from "@/errors/errors";
import bcrypt from "bcrypt";
import { authRepository } from "@/repositories/authRepository";

async function create(name: string, email: string, password: string) {
    const responsible = await authRepository.findByEmail(email);
    if(responsible) throw errors.conflict("responsible");

    const passwordHash =  bcrypt.hashSync(password, 10);

    await authRepository.create(name, email, passwordHash);
}

export const authService = {create}