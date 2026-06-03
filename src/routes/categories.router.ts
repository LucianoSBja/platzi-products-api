import { NextFunction, Request, Response, Router } from "express";
import CategoryService from "../services/category.services";

const router: Router = Router();
const service = new CategoryService();

router.get("/", (req: Request, res: Response) => {
  res.json(service.find());
});

router.get("/:id", async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const category = service.findOne(id);
    res.json(category);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newCategory = service.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
});

router.patch(
  "/:id",
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const category = service.update(id, req.body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
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
