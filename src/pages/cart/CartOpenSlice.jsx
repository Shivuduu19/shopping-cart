import { createSlice } from "@reduxjs/toolkit";

export const CartOpenSlice = createSlice({
  name: "isopen",
  initialState: {
    value: false,
  },
  reducers: {
    open: (state) => (state.value = true),
    close: (state) => (state.value = false),
  },
});
export const { open, close } = CartOpenSlice.actions;
export default CartOpenSlice.reducer;
