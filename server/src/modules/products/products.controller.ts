import catchAsync from "../../utils/catchAsync";
import SendResponse from "../../utils/sendResponse";
import { ProductService } from "./products.service";
import httpStatus from "http-status";

const CreateProduct = catchAsync(async (req, res) => {
  const result = await ProductService.CreateProductIntoDB(req.body);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product Created Successfully",
    data: result,
  });
});

const GetAllProduct = catchAsync(async (req, res) => {
  const result = await ProductService.GetAllProductFromDB(
    req.query.search as string, req.query.sort as string
  );

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product Fetched Successfully",
    data: result,
  });
});

const GetSingleProduct = catchAsync(async (req, res) => {
  const result = await ProductService.GetSingleProductFromDB(req.params.id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product Fetched Successfully",
    data: result,
  });
});

export const ProductController = {
  CreateProduct,
  GetAllProduct,
  GetSingleProduct,
};
