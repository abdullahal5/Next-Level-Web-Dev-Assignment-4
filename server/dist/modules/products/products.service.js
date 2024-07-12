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
exports.ProductService = void 0;
const products_model_1 = require("./products.model");
const CreateProductIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = products_model_1.ProductModel.create(payload);
    return result;
});
const GetAllProductFromDB = (query, sort) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (query) {
        const regex = new RegExp(query, "i");
        if (sort === "priceLowToHigh") {
            result = yield products_model_1.ProductModel.find({
                $or: [{ name: { $regex: regex } }, { brand: { $regex: regex } }],
            }).sort({ price: 1, createdAt: -1 });
        }
        else if (sort === "priceHighToLow") {
            result = yield products_model_1.ProductModel.find({
                $or: [{ name: { $regex: regex } }, { brand: { $regex: regex } }],
            }).sort({ price: -1, createdAt: -1 });
        }
        else {
            result = yield products_model_1.ProductModel.find({
                $or: [{ name: { $regex: regex } }, { brand: { $regex: regex } }],
            }).sort({ createdAt: -1 });
        }
    }
    else {
        if (sort === "priceLowToHigh") {
            result = yield products_model_1.ProductModel.find().sort({ price: 1, createdAt: -1 });
        }
        else if (sort === "priceHighToLow") {
            result = yield products_model_1.ProductModel.find().sort({ price: -1, createdAt: -1 });
        }
        else {
            result = yield products_model_1.ProductModel.find().sort({ createdAt: -1 });
        }
    }
    return result;
});
const GetSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = products_model_1.ProductModel.findById(id);
    return result;
});
exports.ProductService = {
    CreateProductIntoDB,
    GetAllProductFromDB,
    GetSingleProductFromDB,
};
