import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import Header from "./Header";
import { useSelector } from "react-redux";
import { IMAGE_CDN_URL } from "./../utils/constants";
import Genre from "./Genre";
import dayjs from "dayjs";
import CircularRatingBar from "./CircularRatingBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";

const Movie = () => {
  const movieId = useParams();
  useMovieDetails(movieId);
  const details = useSelector((store) => store.moviePageDetails);
  console.log(details);
  const date = details.movieDetails?.release_date;

  const hours = Math.floor(details.movieDetails?.runtime / 60);
  const minutes = Math.floor(details.movieDetails?.runtime % 60);

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
        <div className="pt-20 text-white">
          <h1 className=" text-3xl font-semibold">
            {details.movieDetails?.original_title}
          </h1>
          <p className="font-light text-sm">{details.movieDetails?.tagline}</p>
          <div className="flex py-2">
            <h3>{dayjs(date).format("MMM D, YYYY") + "      •"}</h3>

            <h3 className="mx-2">{hours + "h " + minutes + "m"}</h3>
          </div>
          <h3 className="flex ">
            {details.movieDetails?.genres.map((genre) => (
              <Genre genre={genre?.name} />
            ))}
          </h3>
          <div className="flex my-3">
            <div className="w-12 py-3 mr-2">
              <CircularRatingBar
                rating={details.movieDetails?.vote_average.toFixed(1)}
              />
            </div>
            <button className="mx-4 transition hover:-translate-y-1 after:text-red-600">
              <FavoriteBorderIcon fontSize="large" />
            </button>
            <button className="mx-4 transition hover:-translate-y-1 after:text-red-600">
              <BookmarkAddOutlinedIcon fontSize="large" />
            </button>
            <button className="mx-4 transition hover:-translate-y-1 after:text-red-600">
              <GradeOutlinedIcon fontSize="large" />
            </button>
            <button className="text-xl transition hover:-translate-y-1 px-2 text-white rounded-lg">
              <PlayCircleOutlineOutlinedIcon fontSize="large" /> Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
