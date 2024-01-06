import React, { useState } from "react";
import { IMAGE_CDN_URL } from "./../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import Genre from "./Genre";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import CircularRatingBar from "./CircularRatingBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import VideoBackground from "./VideoBackground";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import {
  addFavouriteMovie,
  addWatchlist,
  removeFavouriteMovie,
  removeWatchlist,
} from "../utils/slices/moviesSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VideoPalyer from "./VideoPalyer";

const TopContainer = () => {
  const [toggle, setToggle] = useState(false);
  const movieId = useParams();
  const details = useSelector((store) => store?.moviePageDetails);
  const dispatch = useDispatch();

  const date = details.movieDetails?.release_date;
  const hours = Math.floor(details.movieDetails?.runtime / 60);
  const minutes = Math.floor(details.movieDetails?.runtime % 60);

  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);
  const keys = movieTrailer?.key;

  const handlePlay = () => {
    setToggle(!toggle);
  };
  const handlePause = () => {
    setToggle(false);
  };

  const addToFavourite = () => {
    dispatch(addFavouriteMovie(details.movieDetails));
  };
  const addTowatchList = () => {
    dispatch(addWatchlist(details.movieDetails));
  };
  return (
    <div>
      <div className="relative">
        <img
          className=" h-[250px] md:w-full md:h-screen absolute object-cover -z-10"
          alt="backdropImg"
          src={IMAGE_CDN_URL + details.movieDetails?.backdrop_path}
        />
        <div className="w-full h-[250px] md:w-full md:h-screen absolute -z-10 bg-black md:bg-opacity-80 bg-opacity-60"></div>
        <div className="md:w-full md:h-full md:flex md:flex-row flex flex-col ">
          <div className="w-28 relative top-16 md:top-0 left-10 md:left-0 md:w-4/12 md:p-20 flex md:pt-[130px]">
            <img
              className="mx-auto rounded-lg"
              alt="moviePoster"
              src={IMAGE_CDN_URL + details.movieDetails?.poster_path}
            />
          </div>
          <div className="w-full min-h-[500px] bg-[#0a0908] pt-5 md:bg-transparent relative top-20 md:top-0 flex flex-col items-center md:items-start text-center md:text-left md:w-8/12 md:pt-[140px] text-white">
            <h1 className="px-4 md:px-0 text-3xl font-semibold ">
              {details.movieDetails?.original_title}
            </h1>
            <p className="font-light text-sm">
              {details.movieDetails?.tagline}
            </p>
            <div className=" flex py-2">
              <h3>{dayjs(date).format("MMM D, YYYY") + "      •"}</h3>

              <h3 className="mx-2">{hours + "h " + minutes + "m"}</h3>
            </div>
            <h3 className="flex ">
              {details.movieDetails?.genres.map((genre) => (
                <Genre key={genre?.name} genre={genre?.name} />
              ))}
            </h3>
            <div className="flex md:my-3 py-2">
              <div className="w-11 mx-1 px-1 py-2 md:px-0 md:w-12 md:py-3 md:mr-2">
                <CircularRatingBar
                  rating={details.movieDetails?.vote_average.toFixed(1)}
                />
              </div>
              <button
                onClick={addToFavourite}
                className="md:mx-4 mx-1 px-2 py-2 transition hover:-translate-y-1 after:text-red-600"
              >
                <FavoriteBorderIcon fontSize="large" />
              </button>
              <button
                onClick={addTowatchList}
                className="md:mx-4 mx-1 px-2 py-2  transition hover:-translate-y-1 after:text-red-600"
              >
                <BookmarkAddOutlinedIcon fontSize="large" />
              </button>
              <button className="md:mx-4 mx-1 px-2 py-2  transition hover:-translate-y-1 after:text-red-600">
                <GradeOutlinedIcon fontSize="large" />
              </button>
              <button
                onClick={() => {
                  handlePlay();
                }}
                className="text-xl mx-1 px-2 py-2  transition hover:-translate-y-1 nd:px-2 text-white rounded-lg"
              >
                <PlayCircleOutlineOutlinedIcon fontSize="large" /> Play
              </button>
            </div>
            <div className="px-4 py-2 pb-5 md:px-0">
              <h3 className="text-xl font-medium ">Overview</h3>
              <p className="md:w-3/4">{details.movieDetails?.overview}</p>
            </div>
          </div>
          {toggle && (
            <>
              <div className="w-full h-screen absolute flex items-center">
                <div className="w-full aspect-video px-2 md:w-[50%] z-30 top-[45%] md:top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 absolute">
                  {/* <VideoBackground
                    movieId={details?.movieDetails?.id}
                    mute={"&mute=0&controls=1&rel=0"}
                  /> */}
                  <VideoPalyer keys={keys} />
                </div>
                <div
                  onClick={handlePause}
                  className="w-full h-screen flex text-white bg-black bg-opacity-95 z-20 absolute"
                >
                  <h2 className="pt-8 pl-8 font-medium text-xl">
                    Movie Trailer
                  </h2>
                  <button className="absolute transition hover:-translate-y-1 p-8 right-0">
                    <CancelOutlinedIcon fontSize="large" />
                  </button>
                </div>
              </div>{" "}
            </>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default TopContainer;
