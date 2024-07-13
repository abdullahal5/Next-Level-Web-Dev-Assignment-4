import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ search, sort, price }) => ({
        url: `/products`,
        method: "GET",
        params: {
          search,
          sort: sort,
          price: price,
        },
      }),
    }),
    getSingleProducts: builder.query({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
    }),
    deleteProduct: builder.mutation({
      query: ({ id }) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductsQuery,
  useDeleteProductMutation,
} = productApi;
