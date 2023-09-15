import  { Router } from "express";
import { validateSchema } from "middlewares/validateSchema.middleware";
import { responsibleSchema } from "@/schemas/responsibleSchema";
import responsibleController from "@/controllers/responsibleController";
const responsibleRouter = Router();

responsibleRouter.post('/responsible', validateSchema(responsibleSchema), responsibleController.createResponsible);

responsibleRouter.delete('/responsible', responsibleController.deleteResponsible);

export default responsibleRouter;
