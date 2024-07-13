"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const prodcutSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.ProductModel = (0, mongoose_1.model)("Product", prodcutSchema);
