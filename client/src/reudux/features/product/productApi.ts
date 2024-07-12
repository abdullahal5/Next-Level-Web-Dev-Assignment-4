import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ search, priceValue }) => ({
        url: `/products`,
        method: "GET",
        params: {
          search,
          sort: priceValue,
        },
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
