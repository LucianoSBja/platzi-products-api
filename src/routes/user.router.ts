import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send("No hay paremetros");
  }
});

export default router;
