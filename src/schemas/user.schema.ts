import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z.email("El email no es válido"),
  role: z.union([z.literal("admin"), z.literal("user")]).default("user"),
});

export const updateUserSchema = createUserSchema.partial();

export const userParamsSchema = z.object({
  id: z.uuid("El id debe ser un UUID válido"),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
export type UpdateUserDto = z.infer<typeof updateUserSchema>;
export type UserParams = z.infer<typeof userParamsSchema>;
