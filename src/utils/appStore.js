import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";
import gptReducer from "./slices/gptSlice";
import configReducer from "./slices/configSlice";
import moviePageReducer from "./slices/moviePageSlice";
import credits from "./slices/creditsSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
    moviePageDetails: moviePageReducer,
    credits: credits,
  },
});

export default appStore;
