import { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";
import createError from "http-errors";

type RequestPart = "body" | "params" | "query";

export const validateSchema = (schema: ZodType, part: RequestPart = "body") => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[part]);
    if (!result.success) {
      const messages = result.error.issues.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      }));
      return next(createError(400, "Datos inválidos", { errors: messages }));
    }
    req[part] = result.data;
    next();
  };
};
