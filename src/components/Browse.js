import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomimgMovies from "../hooks/useUpcomimgMovies";
import { useDispatch, useSelector } from "react-redux";
import { toggleToGptPage } from "../utils/slices/gptSlice";
import { addPath } from "../utils/slices/pathSlice";
import Footer from "./Footer";
import Shimmer from "./Shimmer";

const Browse = () => {
  const toggledValue = useSelector((store) => store.gpt.showGptSearchPage);
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomimgMovies();
  const dispatch = useDispatch();

  const pathname = window.location.pathname;

  useEffect(() => {
    dispatch(toggleToGptPage());
    dispatch(addPath(pathname));
  }, []);

  return nowPlayingMovies === null ? (
    <Shimmer />
  ) : (
    <div className="w-full h-full">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
