import Joi from "joi";
import joiDate from "@joi/date"
import { Responsible } from "@/protocols/responsibleProtocol";

export const responsibleSchema = Joi.object<Responsible>({
    name: Joi.string().min(2).max(255).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})