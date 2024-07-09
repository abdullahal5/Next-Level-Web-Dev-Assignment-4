import { TProduct } from "./products.interface";
import { ProductModel } from "./products.model";

const CreateProductIntoDB = async (payload: TProduct) => {
  const result = ProductModel.create(payload);
  return result;
};

export const ProductService = {
  CreateProductIntoDB,
};
