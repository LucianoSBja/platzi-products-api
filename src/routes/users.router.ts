import { Request, Response, Router } from "express";
import UserService from "../services/user.services";

const router = Router();
const service = new UserService();

// GET all
router.get("/", (req: Request, res: Response) => {
  res.json(service.find());
});

// GET one
router.get("/:id", (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const user = service.findOne(id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// POST new
router.post("/", (req: Request, res: Response) => {
  const { name, email, role } = req.body;
  const newUser = service.create({ name, email, role });
  res.status(201).json(newUser);
});

// PATCH update
router.patch("/:id", (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const updated = service.update(id, req.body);
  if (!updated) return res.status(404).json({ message: "User not found" });
  res.json(updated);
});

// DELETE remove
router.delete("/:id", (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const deleted = service.delete(id);
  if (!deleted) return res.status(404).json({ message: "User not found" });
  res.status(204).send();
});

export default router;
