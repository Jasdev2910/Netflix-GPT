import { createSlice } from "@reduxjs/toolkit";

const moviePageSlice = createSlice({
  name: "moviePage",
  initialState: {
    movieDetails: null,
  },
  reducers: {
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    removeMovieDetails: (state, action) => {
      state.movieDetails = null;
    },
  },
});

export const { addMovieDetails, removeMovieDetails } = moviePageSlice.actions;
export default moviePageSlice.reducer;
