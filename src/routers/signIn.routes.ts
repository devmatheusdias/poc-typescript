import  { Router } from "express";
import { validateSchema } from "middlewares/validateSchema.middleware";
import { responsibleSchema } from "@/schemas/responsibleSchema";
import authController from "@/controllers/authController";

const signInRouter = Router()

signInRouter.post('/signIn', authController.deleteResponsible);

export default signInRouter;

