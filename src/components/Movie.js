import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import Header from "./Header";

const Movie = () => {
  const movieId = useParams();

  const movieDetails = useMovieDetails(movieId);
  console.log(movieDetails);
  return <div></div>;
};

export default Movie;
