import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useSimilarMovies = (movieId) => {
  const getSimilarMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/ " +
        movieId +
        "/similar?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
  };

  useEffect(() => {
    getSimilarMovies();
  }, []);
};

export default useSimilarMovies;
