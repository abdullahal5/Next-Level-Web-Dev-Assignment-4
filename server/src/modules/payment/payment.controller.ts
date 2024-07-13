import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import SendResponse from "../../utils/sendResponse";
import { PaymentService } from "./payment.service";

const CreatePayment = catchAsync(async (req, res) => {
  const result = await PaymentService.createPaymentIntoDB(req.body);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment Created Successfully",
    data: result,
  });
});

export const PaymentController = {
  CreatePayment,
};
