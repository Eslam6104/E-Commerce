import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apislice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefault) => getDefault().concat(apiSlice.middleware),
});