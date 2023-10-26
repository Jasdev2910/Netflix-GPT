import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieList = ({ title, movies }) => {
  const showGptSearchPage = useSelector((store) => store.gpt.showGptSearchPage);

  return (
    <div className="relative  md:mb-5">
      {showGptSearchPage ? (
        <div className="bg-black text-center flex items-center bg-opacity-0">
          <h1 className=" text-lg md:text-3xl p-2 text-left font-bold text-red-500">
            {title}
          </h1>
        </div>
      ) : (
        <div className="top-2 md:px-6 md:w-[180px] md:h-[270px] bg-gradient-to-r from-black from-30% via-gray-950 via-50 bg-black md:absolute text-center flex items-center bg-opacity-0">
          <h1 className=" text-lg md:text-3xl p-2 text-left font-bold text-red-500">
            {title}
          </h1>
        </div>
      )}
      {showGptSearchPage ? (
        <div className="flex overflow-x-scroll no-scrollbar scroll-smooth">
          <div className="flex ">
            {movies?.map((movie) => (
              <MovieCard poster_path={movie.poster_path} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex md:pl-[130px] overflow-x-scroll no-scrollbar scroll-smooth">
          <div className="flex ">
            {movies?.map((movie) => (
              <MovieCard poster_path={movie.poster_path} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;

{
  /*  */
}
