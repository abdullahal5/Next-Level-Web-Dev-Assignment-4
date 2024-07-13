import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (body) => ({
        url: "/create-product",
        method: "POST",
        body: body,
      }),
    }),
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
    updateProduct: builder.mutation({
      query: ({ id, body }) => {
        return {
          url: `/products/${id}`,
          method: "PUT",
          body: body,
        };
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductsQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
} = productApi;
