import  { Router } from "express";
import { validateSchema } from "middlewares/validateSchema.middleware";
import responsibleController from "@/controllers/responsibleController";
const responsibleRouter = Router();

responsibleRouter.post('/responsible', responsibleController.createResponsible);

responsibleRouter.delete('/responsible', responsibleController.deleteResponsible);

export default responsibleRouter;
