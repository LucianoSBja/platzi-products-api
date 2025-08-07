import { Request, Response, Router } from "express";

const router = Router();

router.get(
  "/:categoryId/products/:productId",
  (req: Request, res: Response) => {
    const { categoryId, productId } = req.params;
    res.json({ categoryId, productId });
  }
);

export default router;
