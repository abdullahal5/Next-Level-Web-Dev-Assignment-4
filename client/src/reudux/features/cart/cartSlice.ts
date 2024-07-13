import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

type TProduct = {
  _id: string;
  name: string;
  coverImage: string;
  brand: string;
  description?: string;
  quantity: number;
  price: number;
  rating: number;
  orderQuantity: number;
  orderPrice: number;
};

const initialState: TProduct[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductItem: (state, action) => {
      const existingProduct = state.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        if (existingProduct.orderQuantity < existingProduct.quantity) {
          existingProduct.orderQuantity += 1;
          existingProduct.orderPrice =
            existingProduct.orderQuantity * existingProduct.price;
        } else {
          toast.error("Cannot add more than available quantity.");
        }
      } else {
        state.push({
          ...action.payload,
          orderQuantity: 1,
          orderPrice: action.payload.price,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const findProductById = state.find((item) => item._id === action.payload);
      if (findProductById) {
        findProductById.orderQuantity += 1;
        findProductById.orderPrice =
          findProductById.orderQuantity * findProductById.price;
      } else {
        toast.error("Product not found");
      }
    },
    decreaseQuantity: (state, action) => {
      const findProductById = state.find((item) => item._id === action.payload);
      if (findProductById) {
        findProductById.orderQuantity -= 1;
        findProductById.orderPrice =
          findProductById.orderQuantity * findProductById.price;
      } else {
        toast.error("Product not found");
      }
    },
    removeCart: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    },
    clearCart: (_, action) => {
      return action.payload;
    },
  },
});

export const {
  addProductItem,
  increaseQuantity,
  decreaseQuantity,
  removeCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
