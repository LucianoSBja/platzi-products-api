import {z} from "zod";


export const createProductSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  price: z.number().positive("El precio debe ser mayor a 0"),
  image: z.url("La imagen debe ser una URL válida"),
  isBlocked: z.boolean().default(false),
});

export const updateProductSchema = createProductSchema.partial();

export const productParamsSchema = z.object({
  id: z.uuid("El id debe ser un UUID válido"),
});

export const productQuerySchema = z.object({
  limit: z.coerce.number().int().positive().default(10),
  offset: z.coerce.number().int().min(0).default(0),
});

export type CreateProductDto = z.infer<typeof createProductSchema>;
export type UpdateProductDto = z.infer<typeof updateProductSchema>;
export type ProductParams = z.infer<typeof productParamsSchema>;
export type ProductQuery = z.infer<typeof productQuerySchema>;
