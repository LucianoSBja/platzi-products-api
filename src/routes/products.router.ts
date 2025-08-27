import { Request, Response, Router } from "express";
import ProductService from "../services/product.services";

const router = Router();

const service = new ProductService();

router.get("/", (req: Request, res: Response) => {
  const products = service.find();
  res.json(products);
});

router.get("/filter", (req: Request, res: Response) => {
  res.send("Yo soy un filter");
});

router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }
  const product = service.findOne(id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

// POST
router.post("/", (req: Request, res: Response) => {
  const { name, price, image } = req.body;
  const newProduct = service.create({ name, price, image });
  res.status(201).json(newProduct);
});

router.patch("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }
  const product = service.update(id, req.body);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }
  const deleted = service.delete(id);
  if (!deleted) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(204).send();
});

export default router;
