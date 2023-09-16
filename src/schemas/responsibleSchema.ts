import Joi from "joi";
import joiDate from "@joi/date"
import { createResponsible } from "@/protocols/responsibleProtocol";

export const responsibleSchema = Joi.object<createResponsible>({
    name: Joi.string().min(2).max(255).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})