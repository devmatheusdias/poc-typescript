import { Router } from "express";
import signUpRouter from "./signUp.routes";
import signInRouter from "./signIn.routes";
import taskRouter from "./taskRoutes";
import logoutRouter from "./logout.routes";

const routes = Router();
routes.use(taskRouter, signInRouter, signUpRouter, logoutRouter);

export default routes;