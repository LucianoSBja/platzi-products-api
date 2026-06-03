import {z} from "zod";


export const createProductSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  price: z.number().positive("El precio debe ser mayor a 0"),
  image: z.url("La imagen debe ser una URL válida"),
  isBlocked: z.boolean().default(false),
});

export const updateProductSchema = createProductSchema.partial();

export type CreateProductDto = z.infer<typeof createProductSchema>;
export type UpdateProductDto = z.infer<typeof updateProductSchema>;
