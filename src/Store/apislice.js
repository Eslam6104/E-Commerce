import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",

      // Clean up DummyJSON result
      transformResponse: (res) => {
        if (Array.isArray(res?.products)) return res.products;
        console.error("Unexpected API shape", res);
        return [];
      },
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
