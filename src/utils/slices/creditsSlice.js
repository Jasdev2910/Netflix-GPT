import { createSlice } from "@reduxjs/toolkit";

const creditSlice = createSlice({
  name: "credits",
  initialState: {
    cast: null,
  },
  reducers: {
    addCast: (state, action) => {
      state.cast = action.payload;
    },
  },
});

export const { addCast } = creditSlice.actions;
export default creditSlice.reducer;
