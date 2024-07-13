"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const Products_validation_1 = require("./Products.validation");
const router = express_1.default.Router();
router.post("/create-product", (0, validateRequest_1.default)(Products_validation_1.ProductValidation.productSchema), products_controller_1.ProductController.CreateProduct);
router.get("/products", products_controller_1.ProductController.GetAllProduct);
router.get("/products/:id", products_controller_1.ProductController.GetSingleProduct);
router.delete("/products/:id", products_controller_1.ProductController.deleteProduct);
router.put("/products/:id", products_controller_1.ProductController.updateProduct);
exports.ProductRoute = router;
