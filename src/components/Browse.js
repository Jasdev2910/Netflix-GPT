import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomimgMovies from "../hooks/useUpcomimgMovies";
import GptSearchPage from "./GptSearchPage";
import { useDispatch, useSelector } from "react-redux";
import { removeMovieDetails } from "../utils/slices/moviePageSlice";
import { toggleToGptPage } from "../utils/slices/gptSlice";

const Browse = () => {
  const toggledValue = useSelector((store) => store.gpt.showGptSearchPage);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomimgMovies();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hello");
    dispatch(toggleToGptPage());
  }, []);

  return (
    <div>
      <Header />

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
