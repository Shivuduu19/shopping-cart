import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
  name: "login",
  initialState: {
    value: false,
  },
  reducers: {
    setLogin: (state) => {
      state.value = true;
    },
  },
});
export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
