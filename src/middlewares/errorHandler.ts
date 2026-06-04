import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";

interface HttpErrorWithErrors extends HttpError {
  errors?: { field: string; message: string }[];
}

export const errorHandler = (
  err: HttpErrorWithErrors,
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
    ...(err.errors && { errors: err.errors }),
  });
};
