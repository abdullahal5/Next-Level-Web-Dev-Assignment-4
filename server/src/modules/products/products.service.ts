import { TProduct } from "./products.interface";
import { ProductModel } from "./products.model";

const CreateProductIntoDB = async (payload: TProduct) => {
  const result = ProductModel.create(payload);
  return result;
};

const GetAllProductFromDB = async (query?: string, sort?: string) => {
  let result;
  if (query) {
    const regex = new RegExp(query, "i");

    if (sort === "priceLowToHigh") {
      result = await ProductModel.find({
        $or: [{ name: { $regex: regex } }, { brand: { $regex: regex } }],
      }).sort({ price: 1, createdAt: -1 });
    } else if (sort === "priceHighToLow") {
      result = await ProductModel.find({
        $or: [{ name: { $regex: regex } }, { brand: { $regex: regex } }],
      }).sort({ price: -1, createdAt: -1 });
    } else {
      result = await ProductModel.find({
        $or: [{ name: { $regex: regex } }, { brand: { $regex: regex } }],
      }).sort({ createdAt: -1 });
    }
  } else {
    if (sort === "priceLowToHigh") {
      result = await ProductModel.find().sort({ price: 1, createdAt: -1 });
    } else if (sort === "priceHighToLow") {
      result = await ProductModel.find().sort({ price: -1, createdAt: -1 });
    } else {
      result = await ProductModel.find().sort({ createdAt: -1 });
    }
  }
  return result;
};


const GetSingleProductFromDB = async (id: string) => {
  const result = ProductModel.findById(id);
  return result;
};

export const ProductService = {
  CreateProductIntoDB,
  GetAllProductFromDB,
  GetSingleProductFromDB,
};
