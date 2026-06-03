import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";

export const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  const message = err.message || "Error interno del servidor";

  console.error(`[Error] ${status} - ${message}`);

  res.status(status).json({
    statusCode: status,
    message,
  });
};
