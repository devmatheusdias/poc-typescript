import Joi from "joi";
import joiDate from "@joi/date"

import { Task } from "@/protocols/taskProtocol";

export const taskSchema = Joi.object<Task>({
    name: Joi.string().min(2).max(255).required(),
    description: Joi.string().min(5).max(255),
    date: Joi.string().regex(/^\d{2}-\d{2}-\d{4}$/),
    status: Joi.bool().default(true)
})