import { Category } from "../types/category.types";
import { faker } from "@faker-js/faker";

class CategoryService {
  private categories: Category[] = [];

  constructor() {
    this.generate();
  }

  private generate() {
    const limit = 20;
    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id: faker.string.uuid(),
        name: faker.commerce.department(),
        description: faker.commerce.productDescription(),
      });
    }
  }

  find() {
    return this.categories;
  }

  findOne(id: string) {
    return this.categories.find((c) => c.id === id);
  }

  create(data: Omit<Category, "id">): Category {
    const newCategory: Category = {
      id: (this.categories.length + 1).toString(),
      ...data,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: string, changes: Partial<Category>) {
    const category = this.findOne(id);
    if (!category) return null;
    Object.assign(category, changes);
    return category;
  }

  delete(id: string) {
    const index = this.categories.findIndex((c) => c.id === id);
    if (index === -1) return false;
    this.categories.splice(index, 1);
    return true;
  }
}

export default CategoryService;
