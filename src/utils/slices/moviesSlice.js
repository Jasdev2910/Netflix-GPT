import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    favourites: [],
    watchList: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addFavouriteMovie: (state, action) => {
      let find = state?.favourites?.findIndex(
        (movie) => movie.id === action.payload.id
      );

      if (find >= 0) {
        alert("Already in Favourites");
      } else {
        state.favourites.push(action.payload);
      }
    },
    removeFavouriteMovie: (state, action) => {
      state.favourites = state.favourites.filter(
        (movie) => movie.movieDetails?.id !== action.payload
      );
    },
    addWatchlist: (state, action) => {
      let find = state?.watchList?.findIndex(
        (movie) => movie.id === action.payload.id
      );

      if (find >= 0) {
        alert("Already in Watchlist");
      } else {
        state.watchList.push(action.payload);
      }
    },
    removeWatchlist: (state, action) => {
      state.watchList = state.watchList.filter(
        (movie) => movie.movieDetails?.id !== action.payload
      );
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addFavouriteMovie,
  removeFavouriteMovie,
  addWatchlist,
  removeWatchlist,
} = moviesSlice.actions;
export default moviesSlice.reducer;
