import  { Router } from "express";
import { validateSchema } from "middlewares/validateSchema.middleware";
import { responsibleSchema } from "@/schemas/responsibleSchema";
import authController from "@/controllers/authController";

const signUpRouter = Router();

signUpRouter.post('/signUp', validateSchema(responsibleSchema), authController.signUp);

export default signUpRouter;

