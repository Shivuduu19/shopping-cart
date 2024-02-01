import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../pages/products/ProductSlice";
import CartReducer from "../pages/cart/CartSlice";
import CartOpenReducer from "../pages/cart/CartOpenSlice";
import loginReducer from "../pages/login/LoginSlice";

export default configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
    cartOpen: CartOpenReducer,
    login: loginReducer,
  },
});
