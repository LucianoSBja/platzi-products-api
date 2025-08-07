import { Request, Response, Router } from "express";

const { faker } = require("@faker-js/faker");

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const products = [];
  const sizeParam = req.query.size;
  const limit = typeof sizeParam === "string" ? parseInt(sizeParam, 10) : 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
  res.json(products);
});

router.get("/filter", (req: Request, res: Response) => {
  res.send("Yo soy un filter");
});

router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ id, name: "Product 2", price: 2000 });
});

export default router;
