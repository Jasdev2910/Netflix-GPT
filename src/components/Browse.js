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
import { addPath } from "../utils/slices/pathSlice";
import Footer from "./Footer";
import Shimmer from "./Shimmer";

const Browse = () => {
  const toggledValue = useSelector((store) => store.gpt.showGptSearchPage);
  const trailer = useSelector((store) => store.movies.movieTrailer);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomimgMovies();
  const dispatch = useDispatch();

  const pathname = window.location.pathname;
  console.log(pathname);

  useEffect(() => {
    console.log("hello");
    dispatch(toggleToGptPage());
    dispatch(addPath(pathname));
  }, []);

  return (
    <div>
      <Header />

      <MainContainer />
      <SecondaryContainer />

      <Footer />
    </div>
  );
};

export default Browse;
