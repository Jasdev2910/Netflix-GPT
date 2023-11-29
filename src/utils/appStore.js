import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";
import gptReducer from "./slices/gptSlice";
import configReducer from "./slices/configSlice";
import moviePageReducer from "./slices/moviePageSlice";
import credits from "./slices/creditsSlice";
import reviewReducer from "./slices/reviewSlice";
import mediaReducer from "./slices/mediaSlice";
import pathReducer from "./slices/pathSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
    moviePageDetails: moviePageReducer,
    credits: credits,
    reviews: reviewReducer,
    media: mediaReducer,
    path: pathReducer,
  },
});

export default appStore;
