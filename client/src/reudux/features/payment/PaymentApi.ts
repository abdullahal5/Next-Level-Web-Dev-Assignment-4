import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentWithCashOnDelivery: builder.mutation({
      query: (body) => ({
        url: "/create-payment",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useCreatePaymentWithCashOnDeliveryMutation } = productApi;
