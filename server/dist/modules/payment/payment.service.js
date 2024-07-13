"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const products_model_1 = require("../products/products.model");
const createPaymentIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProducts = [];
    for (const item of payload.cart) {
        const productId = item._id;
        const orderQuantity = item.orderQuantity;
        const updatedProduct = yield products_model_1.ProductModel.findByIdAndUpdate(productId, { $inc: { quantity: -orderQuantity } }, { new: true });
        if (!updatedProduct) {
            throw new Error(`Product not found with ID: ${productId}`);
        }
        updatedProducts.push(updatedProduct);
    }
    return updatedProducts;
});
exports.PaymentService = {
    createPaymentIntoDB,
};
