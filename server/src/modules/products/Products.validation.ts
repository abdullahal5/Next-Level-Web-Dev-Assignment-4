import { z } from "zod";

const productSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required and must have at least 1 character" }),
  image: z.string({ required_error: "Invalid image URL" }),
  brand: z.string().trim().min(1, {
    message: "Brand is required and must have at least 1 character",
  }),
  quantity: z
    .number()
    .positive({ message: "Quantity must be a positive number" }),
  rating: z
    .number()
    .min(0, "Rating must be between 0 and 5")
    .max(5, "Rating must be between 0 and 5"),
  price: z.number().positive({ message: "Price must be a positive number" }),
});

export const ProductValidation = {
  productSchema,
};
