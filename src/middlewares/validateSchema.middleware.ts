import {Request, Response, NextFunction} from "express";
import { Schema } from "joi";

export function validateSchema(schema: Schema) {

    return (req,res, next: NextFunction) => {       
        const validation = schema.validate(req.body, { abortEarly: false });

        if (validation.error) {
            const errors = validation.error.details.map((detail) => detail.message);
            return res.status(422).send(errors)
        }

        next()
    }

}