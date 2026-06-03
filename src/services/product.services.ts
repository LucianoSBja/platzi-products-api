import { faker } from "@faker-js/faker";
import { Product } from "../types/product.types";
import createError from "http-errors";

class ProductService {
  private products: Product[];

  constructor() {
    this.products = [];
    this.generate();
  }

  private generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlocked: faker.datatype.boolean(),
      });
    }
  }

  create(product: Omit<Product, "id">): Product {
    const newProduct: Product = {
      id: faker.string.uuid(),
      ...product,
      isBlocked: product.isBlocked ?? false,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  find(): Product[] {
    return this.products;
  }

  findOne(id: string): Product {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      console.error(`[ProductService] Producto ${id} no encontrado`);
      throw createError(404, "Producto no encontrado");
    }
    if (product.isBlocked) {
      console.error(`[ProductService] Producto ${id} está bloqueado`);
      throw createError(403, "Producto bloqueado");
    }
    return product;
  }

  update(id: string, changes: Partial<Omit<Product, "id">>): Product {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      console.error(`[ProductService] Producto ${id} no encontrado`);
      throw createError(404, `Producto no encontrado`);
    }
    const existing = this.products[index] as Product;
    const updated: Product = {
      id: existing.id,
      name: changes.name ?? existing.name,
      price: changes.price ?? existing.price,
      image: changes.image ?? existing.image,
      isBlocked: changes.isBlocked ?? existing.isBlocked,
    };
    this.products[index] = updated;
    return updated;
  }

  delete(id: string): { id: string } {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      console.error(`[ProductService] Producto ${id} no encontrado`);
      throw createError(404, `Producto no encontrado`);
    }
    this.products.splice(index, 1);
    return { id };
  }
}

export default ProductService;
