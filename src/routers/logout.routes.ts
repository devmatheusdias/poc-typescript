import  { Router } from "express";
import { validateSchema } from "middlewares/validateSchema.middleware";
import { validateSignin } from "@/middlewares/signIn.middleware";
import authSchemas from "@/schemas/authSchemas";
import authController from "@/controllers/authController";

const logoutRouter = Router()

logoutRouter.post('/logout', validateSchema(authSchemas.signInSchema), validateSignin, authController.signIn);

export default logoutRouter;

