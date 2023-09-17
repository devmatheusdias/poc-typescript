import  { Router } from "express";
import { validateSchema } from "middlewares/validateSchema.middleware";
import { validateSignin } from "@/middlewares/signIn.middleware";
import authSchemas from "@/schemas/authSchemas";
import authController from "@/controllers/authController";

const signInRouter = Router()

signInRouter.post('/signIn', validateSchema(authSchemas.signInSchema), validateSignin, authController.signIn);

export default signInRouter;

