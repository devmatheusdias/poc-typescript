import  { Router } from "express";
import { validateSchema } from "middlewares/validateSchema.middleware";
import authSchemas from "@/schemas/authSchemas";
import authController from "@/controllers/authController";

const signUpRouter = Router();

signUpRouter.post('/signUp', validateSchema(authSchemas.signUpSchema), authController.signUp);

export default signUpRouter;

