import { Request, Response, Router, NextFunction } from "express";
import ProductService from "../services/product.services";

const router: Router = Router();
const service = new ProductService();

router.get("/", (req: Request, res: Response) => {
  res.json(service.find());
});

router.get("/filter", (req: Request, res: Response) => {
  res.send("Yo soy un filter");
});

router.get("/:id", async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    res.json(service.findOne(id));
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, price, image, isBlocked } = req.body;
    res.status(201).json(service.create({ name, price, image, isBlocked }));
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    res.json(service.update(id, req.body));
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    service.delete(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export default router;
