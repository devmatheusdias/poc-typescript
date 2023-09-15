import { Router } from "express";
import responsibleRouter from "./responsibleRoutes";
import taskRouter from "./taskRoutes";

const routes = Router();
routes.use(responsibleRouter, taskRouter);

export default routes;