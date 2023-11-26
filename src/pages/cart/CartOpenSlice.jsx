import { createSlice } from "@reduxjs/toolkit";

export const CartOpenSlice = createSlice({
  name: "isopen",
  initialState: {
    value: false,
  },
  reducers: {
    openCart: (state) => {
      state.value = true;
    },
    closeCart: (state) => {
      state.value = false;
    },
  },
});
export const { openCart, closeCart } = CartOpenSlice.actions;
export default CartOpenSlice.reducer;
