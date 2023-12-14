import React, { useEffect } from "react";
import { IMAGE_CDN_URL } from "../utils/constants";
import CircularRatingBar from "./CircularRatingBar";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { addMovieClicked } from "../utils/slices/moviePageSlice";
import { useParams } from "react-router-dom";

const MovieCard = ({
  title,
  movieId,
  date,
  rating,
  poster_path,
  textColor,
  bgColor,
}) => {
  if (!poster_path) return null;
  return (
    <div className="">
      <div
        className={`w-[100px] md:w-[180px] ${bgColor}  m-2 cursor-pointer rounded-lg relative shadow-md `}
      >
        <img
          className="rounded-t-lg ob"
          alt="movie card"
          src={IMAGE_CDN_URL + poster_path}
        />
        <div className="relative left-1 bottom-4 md:left-2 md:bottom-8 w-8 md:w-14 bg-gray-900 rounded-full ">
          <CircularRatingBar rating={rating} />
        </div>
        <h3
          className={`${textColor} bottom-4 relative md:bottom-7 md:left-2 text-sm md:text-base line-clamp-1`}
        >
          {title}
        </h3>
        <p
          className={`${textColor} bottom-4 text-xs md:text-base relative md:bottom-7 md:left-2`}
        >
          {dayjs(date).format("MMM D, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
