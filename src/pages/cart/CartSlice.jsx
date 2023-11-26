import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      const isInCart = state.value.find(
        (item) => item.id === action.payload.id
      );
      isInCart
        ? (isInCart.quantity += 1)
        : state.value.push({ ...action.payload, quantity: 1 });
    },

    removeItem: (state, action) => {
      const isIncart = state.value.find(
        (item) => item.id === action.payload.id
      );
      if (isIncart) {
        if (isIncart.quantity === 1) {
          state.value = state.value.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          isIncart.quantity -= 1;
        }
      }
    },
  },
});
export const { addItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
