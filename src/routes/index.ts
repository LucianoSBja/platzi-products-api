import { Express, Router } from "express";
import productsRouter from "./products.router";
import userRouter from "./user.router";
import categoriesRouter from "./categories.router";

export function routerApi(app: Express) {
  const router = Router();
  app.use("/api/v1", router);
  router.use("/products", productsRouter);
  router.use("/user", userRouter);
  router.use("/categories", categoriesRouter);
}
