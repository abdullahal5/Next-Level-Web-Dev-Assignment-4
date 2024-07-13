import { TProduct } from "./products.interface";
import { ProductModel } from "./products.model";

const CreateProductIntoDB = async (payload: TProduct) => {
  const result = ProductModel.create(payload);
  return result;
};

const GetAllProductFromDB = async (
  query?: string,
  sort?: string,
  price?: string
) => {
  const priceValue = Number(price) || 0;
  let result;

  if (query) {
    const regex = new RegExp(query, "i");

    if (sort === "priceLowToHigh") {
      if (priceValue > 0) {
        result = await ProductModel.find({
          $or: [{ name: { $regex: regex } }, { brand: { $regex: regex } }],
          price: { $lte: priceValue },
        }).sort({ price: 1, createdAt: -1 });
      } else {
        result = await ProductModel.find({
          $or: [{ name: { $regex: regex } }, { brand: { $regex: regex } }],
        }).sort({ price: 1, createdAt: -1 });
      }
    } else if (sort === "priceHighToLow") {
      if (priceValue > 0) {
        result = await ProductModel.find({
          $or: [{ name: { $regex: regex } }, { brand: { $regex: regex } }],
          price: { $lte: priceValue },
        }).sort({ price: -1, createdAt: -1 });
      } else {
        result = await ProductModel.find({
          $or: [{ name: { $regex: regex } }, { brand: { $regex: regex } }],
        }).sort({ price: -1, createdAt: -1 });
      }
    } else {
      if (priceValue > 0) {
        result = await ProductModel.find({
          $or: [{ name: { $regex: regex } }, { brand: { $regex: regex } }],
          price: { $lte: priceValue },
        }).sort({ createdAt: -1 });
      } else {
        result = await ProductModel.find({
          $or: [{ name: { $regex: regex } }, { brand: { $regex: regex } }],
        }).sort({ createdAt: -1 });
      }
    }
  } else {
    if (priceValue > 0) {
      result = await ProductModel.find({ price: { $lte: priceValue } }).sort({
        createdAt: -1,
      });
    } else {
      if (sort === "priceLowToHigh") {
        result = await ProductModel.find().sort({ price: 1, createdAt: -1 });
      } else if (sort === "priceHighToLow") {
        result = await ProductModel.find().sort({ price: -1, createdAt: -1 });
      } else {
        result = await ProductModel.find().sort({ createdAt: -1 });
      }
    }
  }

  return result;
};

const GetSingleProductFromDB = async (id: string) => {
  const result = ProductModel.findById(id);
  return result;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await ProductModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteProductIntoDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  CreateProductIntoDB,
  GetAllProductFromDB,
  GetSingleProductFromDB,
  updateProductIntoDB,
  deleteProductIntoDB,
};
