import { Request, Response, Router } from "express";
import CategoryService from "../services/category.services";

const router = Router();
const service = new CategoryService();

router.get("/", (req: Request, res: Response) => {
  res.json(service.find());
});

router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }
  const category = service.findOne(id);
  if (!category) return res.status(404).json({ message: "Category not found" });
  res.json(category);
});

router.post("/", (req: Request, res: Response) => {
  const newCategory = service.create(req.body);
  res.status(201).json(newCategory);
});

router.patch("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }
  const category = service.update(id, req.body);
  if (!category) return res.status(404).json({ message: "Category not found" });
  res.json(category);
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }
  const deleted = service.delete(id);
  if (!deleted) return res.status(404).json({ message: "Category not found" });
  res.status(204).send();
});

export default router;
