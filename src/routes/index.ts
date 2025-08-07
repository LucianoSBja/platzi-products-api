import { Express } from "express";
import productsRouter from "./products.router";
import userRouter from "./user.router";
import categoriesRouter from "./categories.router";

export function routerApi(app: Express) {
  app.use("/products", productsRouter);
  app.use("/user", userRouter);
  app.use("/categories", categoriesRouter);
}
