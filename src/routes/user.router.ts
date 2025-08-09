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

// POST: Crear un nuevo producto
router.post("/", (req: Request, res: Response) => {
  const { name, price, image } = req.body;
  res.status(201).json({
    message: "Product created successfully",
    product: { name, price, image },
  });
});

// PATCH: Actualizar un producto
router.patch("/:productId", (req: Request, res: Response) => {
  const { productId } = req.params;
  const { name, price, image } = req.body;

  res.json({
    message: "Product updated successfully",
    product: { productId, name, price, image },
  });
});

// DELETE: Eliminar un producto
router.delete("/:productId", (req: Request, res: Response) => {
  const { productId } = req.params;
  res.json({
    message: `Product with ID ${productId} deleted successfully`,
  });
});

export default router;
