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
  if (id === "999") {
    res.status(404).json({ message: "not found" });
  } else {
    res.status(200).json({ id, name: "Product 2", price: 2000 });
  }
});

router.post("/", (req: Request, res: Response) => {
  const body = req.body;
  res.status(201).json({ message: "created", data: body });
});

router.patch("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  res.json({ message: "update", data: body, id });
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: "deleted", id });
});

export default router;
