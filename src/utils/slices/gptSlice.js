import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchPage: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleToGptPage: (state, actions) => {
      state.showGptSearchPage = !state.showGptSearchPage;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});
export const { toggleToGptPage, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
