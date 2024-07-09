import express from "express";
import { ProductController } from "./products.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidation } from "./Products.validation";

const router = express.Router();

router.post(
  "/create-product",
  validateRequest(ProductValidation.productSchema),
  ProductController.CreateProduct
);

export const ProductRoute = router;
