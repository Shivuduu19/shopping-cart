import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../pages/products/ProductSlice";

export default configureStore({
  reducer: {
    products: ProductReducer,
  },
});
