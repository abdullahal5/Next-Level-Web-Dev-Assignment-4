import mongoose, { Schema } from "mongoose";
import { TFormData, TProductCart } from "./payment.interface";

const TProductCart = new Schema<TProductCart>(
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
      max: 10,
    },
    price: {
      type: Number,
      required: true,
    },
    orderPrice: {
      type: Number,
      required: true,
    },
    orderQuantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema<TFormData>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    cart: {
      type: [TProductCart],
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Payment = mongoose.model<TFormData>("Payment", productSchema);
