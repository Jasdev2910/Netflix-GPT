import React from "react";
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

const Browse = () => {
  const toggledValue = useSelector((store) => store.gpt.showGptSearchPage);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomimgMovies();
  // const dispatch = useDispatch();
  // dispatch(removeMovieDetails());

  return (
    <div>
      <Header />
      {toggledValue ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
