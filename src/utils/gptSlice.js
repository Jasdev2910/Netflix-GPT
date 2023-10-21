import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchPage: false,
  },
  reducers: {
    toggleToGptPage: (state, actions) => {
      state.showGptSearchPage = !state.showGptSearchPage;
    },
  },
});
export const { toggleToGptPage } = gptSlice.actions;
export default gptSlice.reducer;
