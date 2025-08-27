import { Category } from "../types/category.types";

class CategoryService {
  private categories: Category[] = [];

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
