import { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";
import createError from "http-errors";

export const validateSchema = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const messages = result.error.issues.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      }));
      return next(createError(400, "Datos inválidos", { errors: messages }));
    }
    req.body = result.data;
    next();
  };
};
