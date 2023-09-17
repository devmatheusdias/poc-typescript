import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status"

export default function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
  console.log(error);

  if (error.type === "conflict") {
    return res.status(httpStatus.CONFLICT).send(error.message);
  }

  if (error.type === "notFound") {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }

  if (error.type === "wrongData") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  if (error.type === "badRequest") {
    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }

  if (error.type === "tooManyResults") {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }

  if(error.type === "unauthorized"){
    return res.status(httpStatus.UNAUTHORIZED).send(error.message)
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong 😢");
}