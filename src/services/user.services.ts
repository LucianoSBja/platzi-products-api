import { faker } from "@faker-js/faker";
import { User } from "../types/user.types";

class UserService {
  private users: User[];

  constructor() {
    this.users = [];
    this.generate();
  }

  private generate() {
    const limit = 20;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        role: ["admin", "customer"][Math.floor(Math.random() * 2)] as
          | "admin"
          | "customer",
      });
    }
  }

  find(): User[] {
    return this.users;
  }

  findOne(id: string): User | null {
    return this.users.find((u) => u.id === id) || null;
  }

  create(data: Omit<User, "id">): User {
    const newUser: User = {
      id: faker.string.uuid(),
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: string, changes: Partial<Omit<User, "id">>): User | null {
    const existingUser = this.users.find((u) => u.id === id);
    if (!existingUser) return null;

    const updatedUser: User = {
      id: existingUser.id,
      name: changes.name ?? existingUser.name,
      email: changes.email ?? existingUser.email,
      role: changes.role ?? existingUser.role,
    };

    const index = this.users.findIndex((u) => u.id === id);
    this.users[index] = updatedUser;

    return updatedUser;
  }

  delete(id: string): boolean {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}

export default UserService;
