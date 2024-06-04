import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: ["Products"],
    }),
    getCategoryProducts: build.query({
      query: (params) => ({
        url: "/products/category-list",
        params,
      }),
      providesTags: ["Products"],
    }),
    getDetailProduct: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Products"],
    }),
    getCategoryItem: build.query({
      // 'https://dummyjson.com/products/category/smartphones'
      query: (path) => ({
        url: `/products/category/${path}`,
      }),
      providesTags: ["Products"],
    }),
    // Delete
    deleteProducts: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
    // Post
    postProducts: build.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
    // Put
    updateProduct: build.mutation({
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
    // Search
    getSearchProducts: build.query({
      query: (params) => ({
        url: `/products/search`,
        params
      }),
      providesTags: ["Product"]
    }),
  }),
});

export const {
  useGetProductsQuery,
  useDeleteProductsMutation,
  usePostProductsMutation,
  useUpdateProductMutation,
  useGetCategoryProductsQuery,
  useGetCategoryItemQuery,
  useGetDetailProductQuery,
  useGetSearchProductsQuery,
} = productApi;
