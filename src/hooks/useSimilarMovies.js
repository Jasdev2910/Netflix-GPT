import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSimilarMovies } from "../utils/slices/moviesSlice";

const useSimilarMovies = ({ movieId }) => {
  const dispatch = useDispatch();
  const getSimilarMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/ " +
        movieId +
        "/similar?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addSimilarMovies(json.results));
  };

  useEffect(() => {
    getSimilarMovies();
    window.scrollTo(0, 0);
  }, [movieId]);
};

export default useSimilarMovies;
