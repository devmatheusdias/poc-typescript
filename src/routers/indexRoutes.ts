import { Router } from "express";
import signUpRouter from "./signUp.routes";
import signInRouter from "./signIn.routes";
import taskRouter from "./taskRoutes";

const routes = Router();
routes.use(taskRouter, signInRouter, signUpRouter);

export default routes;