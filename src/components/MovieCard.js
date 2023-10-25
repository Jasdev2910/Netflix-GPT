import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="w-[180px] m-2">
      <img alt="movie card" src={IMAGE_CDN_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
