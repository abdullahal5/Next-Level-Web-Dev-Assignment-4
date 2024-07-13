import { Schema, model } from "mongoose";
import { TProduct } from "./products.interface";

const prodcutSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      max: 10
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
export const ProductModel = model<TProduct>("Product", prodcutSchema);

