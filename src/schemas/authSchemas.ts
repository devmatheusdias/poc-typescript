import Joi from "joi";
import joiDate from "@joi/date"
import { createResponsible } from "@/protocols/responsibleProtocol";

const signUpSchema = Joi.object<createResponsible>({
    name: Joi.string().min(2).max(255).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

const signInSchema = Joi.object<createResponsible>({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

const authSchemas = { signInSchema, signUpSchema}

export default authSchemas