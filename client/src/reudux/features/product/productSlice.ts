import { createSlice } from "@reduxjs/toolkit";

export type TProduct = {
  name: string | null;
  coverImage: string | null;
  brand: string | null;
  quantity: number | null;
  price: number | null;
  rating: number | null;
};

const initialState: TProduct = {
  name: null,
  coverImage: null,
  brand: null,
  quantity: null,
  price: null,
  rating: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

// export const { setUser, logout } = productSlice.actions;
export default productSlice.reducer;