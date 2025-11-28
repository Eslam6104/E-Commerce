import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    // Get all products
    getProducts: builder.query({
      query: () => "/products",
      transformResponse: (res) => {
        if (Array.isArray(res?.products)) return res.products;
        console.error("Unexpected API shape", res);
        return [];
      },
    }),

    //  Search products by keyword
    searchProducts: builder.query({
      query: (term) => `/products/search?q=${encodeURIComponent(term)}`,
      transformResponse: (res) => {
        if (Array.isArray(res?.products)) return res.products;
        console.error("Unexpected API shape", res);
        return [];
      },
    }),
  }),
});

export const { useGetProductsQuery, useSearchProductsQuery } = apiSlice;
