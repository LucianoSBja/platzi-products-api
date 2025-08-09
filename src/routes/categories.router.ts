import { Request, Response, Router } from "express";

const router = Router();

router.get(
  "/:categoryId/products/:productId",
  (req: Request, res: Response) => {
    const { categoryId, productId } = req.params;
    res.json({ categoryId, productId });
  }
);

// POST: Crear un nuevo producto
router.post("/:categoryId/products", (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const { name, price, image } = req.body;
  res.status(201).json({
    message: "Product created successfully",
    product: { categoryId, name, price, image },
  });
});

// PATCH: Actualizar un producto específico
router.patch(
  "/:categoryId/products/:productId",
  (req: Request, res: Response) => {
    const { categoryId, productId } = req.params;
    const { name, price, image } = req.body; // Nuevos valores a actualizar
    // Lógica para actualizar el producto en la base de datos
    res.json({
      message: "Product updated successfully",
      product: { categoryId, productId, name, price, image },
    });
  }
);

// DELETE: Eliminar un producto específico
router.delete(
  "/:categoryId/products/:productId",
  (req: Request, res: Response) => {
    const { categoryId, productId } = req.params;
    res.json({
      message: `Product with ID ${productId} from category ${categoryId} deleted successfully`,
    });
  }
);

export default router;
