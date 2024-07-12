"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = void 0;
const zod_1 = require("zod");
const productSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().trim().min(1, {
            message: "Name is required and must have at least 1 character",
        }),
        coverImage: zod_1.z.string({ required_error: "Invalid image URL" }),
        brand: zod_1.z.string().trim().min(1, {
            message: "Brand is required and must have at least 1 character",
        }),
        quantity: zod_1.z
            .number()
            .positive({ message: "Quantity must be a positive number" }),
        rating: zod_1.z
            .number()
            .min(0, "Rating must be between 0 and 5")
            .max(10, "Rating must be between 0 and 5"),
        price: zod_1.z.number().positive({ message: "Price must be a positive number" }),
    }),
});
exports.ProductValidation = {
    productSchema,
};
