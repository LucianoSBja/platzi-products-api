import { faker } from "@faker-js/faker";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

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
      });
    }
  }

  create(product: Omit<Product, "id">): Product {
    const newProduct: Product = {
      id: faker.string.uuid(),
      ...product,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  find(): Product[] {
    return this.products;
  }

  findOne(id: string): Product | undefined {
    return this.products.find((item) => item.id === id);
  }

  update(id: string, changes: Partial<Omit<Product, "id">>): Product | null {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) return null;

    const existingProduct = this.products[index] as Product;

    const updatedProduct: Product = {
      id: existingProduct.id,
      name: changes.name ?? existingProduct.name,
      price: changes.price ?? existingProduct.price,
      image: changes.image ?? existingProduct.image,
    };

    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  delete(id: string): boolean {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) return false;

    this.products.splice(index, 1);
    return true;
  }
}

export default ProductService;
