import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: cart,
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      const isInCart = state.value.find((item) => {
        item.id === action.payload.id;
      });
      return isInCart
        ? state.value.map((item) => {
            item.id === action.payload.id ? (item.quantity += 1) : item;
          })
        : (item.quantity = 1);
    },
    removeItem: (state, action) => {
      const isIncart = state.value.find(
        (item) => item.id === action.payload.id
      );
      return isIncart.quantity === 1
        ? state.value.filter((item) => item.id !== action.payload.id)
        : state.value.map((item) => {
            item.id === action.payload.id ? (item.quantity -= 1) : item;
          });
    },
  },
});
export const { addItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
