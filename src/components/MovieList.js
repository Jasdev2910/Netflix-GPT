import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="relative pl-[130px] mb-5">
      <div className="left-[8px] top-2 px-6 w-[180px] h-[270px] bg-gradient-to-r from-black from-30% via-gray-950 via-50 bg-black absolute text-center flex items-center bg-opacity-0">
        <h1 className="text-3xl p-2 text-left font-bold text-red-500">
          {title}
        </h1>
      </div>
      <div className="flex overflow-x-scroll no-scrollbar scroll-smooth">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
