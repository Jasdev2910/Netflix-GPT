import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const notifyFavourite = () => toast("Added to favourites");
const notifyFavouriteAlert = () => toast("Already in Favourites");
const notifyWatchlist = () => toast("Added to Watchlist");
const notifyWatchlistAlert = () => toast("Already in Watchlist");

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    similarMovies: [],
    recommended: [],
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
    addSimilarMovies: (state, action) => {
      state.similarMovies = action.payload;
    },
    addRecommendation: (state, action) => {
      state.recommended = action.payload;
    },
    addFavouriteMovie: (state, action) => {
      let find = state?.favourites?.findIndex(
        (movie) => movie.id === action.payload.id
      );

      if (find >= 0) {
        notifyFavouriteAlert();
      } else {
        state.favourites.push(action.payload);
        notifyFavourite();
      }
    },
    removeFavouriteMovie: (state, action) => {
      state.favourites = state.favourites.filter(
        (movie) => movie?.id !== action.payload
      );
    },
    addWatchlist: (state, action) => {
      let find = state?.watchList?.findIndex(
        (movie) => movie.id === action.payload.id
      );

      if (find >= 0) {
        notifyWatchlistAlert();
      } else {
        state.watchList.push(action.payload);
        notifyWatchlist();
      }
    },
    removeWatchlist: (state, action) => {
      state.watchList = state.watchList.filter(
        (movie) => movie?.id !== action.payload
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
  addSimilarMovies,
  addRecommendation,
} = moviesSlice.actions;
export default moviesSlice.reducer;
