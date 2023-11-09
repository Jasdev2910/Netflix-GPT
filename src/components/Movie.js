import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import Header from "./Header";
import { useSelector } from "react-redux";
import { IMAGE_CDN_URL } from "./../utils/constants";

const Movie = () => {
  const movieId = useParams();
  useMovieDetails(movieId);
  const details = useSelector((store) => store.moviePageDetails);
  console.log(details);

  return (
    <div className="relative">
      <img
        className="w-full h-full absolute object-cover -z-10"
        alt="backdropImg"
        src={IMAGE_CDN_URL + details.movieDetails?.backdrop_path}
      />
      <div className="w-full h-full absolute -z-10 bg-black bg-opacity-80"></div>
      <div className="w-full h-full flex ">
        <div className="w-4/12 p-20 flex">
          <img
            className="mx-auto rounded-lg"
            alt="moviePoster"
            src={IMAGE_CDN_URL + details.movieDetails?.poster_path}
          />
        </div>
        <div className="pt-20">
          <h1 className="text-white text-3xl font-semibold">
            {details.movieDetails?.original_title}
          </h1>
          <h3>{}</h3>
        </div>
      </div>
    </div>
  );
};

export default Movie;
