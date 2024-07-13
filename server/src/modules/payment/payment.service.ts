import { ProductModel } from "../products/products.model";
import { TFormData } from "./payment.interface";

const createPaymentIntoDB = async (payload: TFormData) => {
  const updatedProducts = [];

  for (const item of payload.cart) {
    const productId = item._id;
    const orderQuantity = item.orderQuantity;

    const updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      { $inc: { quantity: -orderQuantity } },
      { new: true }
    );

    if (!updatedProduct) {
      throw new Error(`Product not found with ID: ${productId}`);
    }

    updatedProducts.push(updatedProduct);
  }

  return updatedProducts;
};

export const PaymentService = {
  createPaymentIntoDB,
};
