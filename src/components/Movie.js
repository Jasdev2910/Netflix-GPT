import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_CDN_URL } from "./../utils/constants";
import Genre from "./Genre";
import dayjs from "dayjs";
import CircularRatingBar from "./CircularRatingBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import { Flag } from "@mui/icons-material";
import VideoBackground from "./VideoBackground";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import {
  addFavouriteMovie,
  addWatchlist,
  removeFavouriteMovie,
  removeWatchlist,
} from "../utils/moviesSlice";

const Movie = () => {
  const [toggle, setToggle] = useState(false);
  const movieId = useParams();
  useMovieDetails(movieId);
  const details = useSelector((store) => store.moviePageDetails);
  console.log(details);
  const date = details.movieDetails?.release_date;

  const hours = Math.floor(details.movieDetails?.runtime / 60);
  const minutes = Math.floor(details.movieDetails?.runtime % 60);
  const dispatch = useDispatch();

  const handlePlay = () => {
    setToggle(!toggle);
  };
  const handlePause = () => {
    setToggle(false);
  };

  const addToFavourite = () => {
    dispatch(addFavouriteMovie(details.movieDetails));
    dispatch(removeFavouriteMovie(details.movieDetails?.id));
  };
  const addTowatchList = () => {
    dispatch(addWatchlist(details.movieDetails));
    dispatch(removeWatchlist(details.movieDetails?.id));
  };

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
        <div className="w-8/12 pt-20 text-white">
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
            <button
              onClick={addToFavourite}
              className="mx-4 transition hover:-translate-y-1 after:text-red-600"
            >
              <FavoriteBorderIcon fontSize="large" />
            </button>
            <button
              onClick={addTowatchList}
              className="mx-4 transition hover:-translate-y-1 after:text-red-600"
            >
              <BookmarkAddOutlinedIcon fontSize="large" />
            </button>
            <button className="mx-4 transition hover:-translate-y-1 after:text-red-600">
              <GradeOutlinedIcon fontSize="large" />
            </button>
            <button
              onClick={handlePlay}
              className="text-xl transition hover:-translate-y-1 px-2 text-white rounded-lg"
            >
              <PlayCircleOutlineOutlinedIcon fontSize="large" /> Play
            </button>
          </div>
          <div>
            <h3 className="text-xl font-medium">Overview</h3>
            <p className="w-3/4">{details.movieDetails?.overview}</p>
          </div>
        </div>
        {toggle && (
          <>
            <div className="w-full h-full absolute flex items-center">
              <div className="w-8/12 z-10 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 absolute">
                <VideoBackground
                  id={details.movieDetails?.id}
                  mute={"&mute=0&controls=1&rel=0"}
                />
              </div>
              <div
                onClick={handlePause}
                className="w-full h-full flex text-white bg-black bg-opacity-90 -z-0 absolute"
              >
                <h2>Movie Trailer</h2>
                <button>
                  <CancelOutlinedIcon />
                </button>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Movie;
