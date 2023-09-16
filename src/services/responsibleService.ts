import { errors } from "@/errors/errors";
import { responsibleRepository } from "@/repositories/responsibleRepository";

async function create(name: string, email: string, password: string) {
    const responsible = await responsibleRepository.findByName(name);
    if(responsible) throw errors.conflict("responsible")

    await responsibleRepository.create(name, email, password);
}

export const responsibleService = {create}