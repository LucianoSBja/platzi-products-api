import { Request, Response, Router, NextFunction } from "express";
import UserService from "../services/user.services";
import { validateSchema } from "../middlewares/validateSchema";
import {
  createUserSchema,
  updateUserSchema,
  userParamsSchema,
} from "../schemas/user.schema";

const router: Router = Router();
const service = new UserService();

router.get("/", (req: Request, res: Response) => {
  res.json(service.find());
});

router.get(
  "/:id",
  validateSchema(userParamsSchema, "params"),
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      res.json(service.findOne(id));
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validateSchema(createUserSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, role } = req.body;
      res.status(201).json(service.create({ name, email, role }));
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  validateSchema(userParamsSchema, "params"),
  validateSchema(updateUserSchema),
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      res.json(service.update(id, req.body));
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  validateSchema(userParamsSchema, "params"),
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      service.delete(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
);

export default router;
