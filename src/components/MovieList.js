import React from "react";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMovieClicked } from "../utils/slices/moviePageSlice";

const MovieList = ({
  title,
  movies,
  textColor,
  gradient,
  bgColor,
  titleColor,
}) => {
  const showGptSearchPage = useSelector((store) => store.gpt.showGptSearchPage);
  const path = useSelector((store) => store.path.path);
  const dispatch = useDispatch();

  return (
    <div className="relative  md:mb-5">
      {path === "/gptSearch" || path === "/movie" ? (
        <div className="bg-black text-center flex items-center bg-opacity-0">
          <h1
            className={`text-lg md:text-3xl p-2 text-left font-bold ${titleColor}`}
          >
            {title}
          </h1>
        </div>
      ) : (
        <div
          className={`top-2 md:px-6 md:w-[188px] md:h-[378px] z-20 rounded-md bg-gradient-to-r ${gradient} md:absolute text-center flex items-center`}
        >
          <h1 className=" text-lg md:text-3xl p-2 text-left font-bold text-red-500 z-20">
            {title}
          </h1>
        </div>
      )}
      {path === "/gptSearch" || path === "/movie" ? (
        <div className="flex overflow-x-scroll no-scrollbar scroll-smooth ">
          <div className="flex">
            {movies?.map((movie) => (
              <Link key={movie.id} to={"/movie/" + movie.id}>
                <div>
                  <MovieCard
                    title={movie?.title}
                    movieId={movie?.id}
                    date={movie?.release_date}
                    rating={movie?.vote_average?.toFixed(1)}
                    poster_path={movie?.poster_path}
                    textColor={textColor}
                    bgColor={bgColor}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex md:pl-[130px] overflow-x-scroll no-scrollbar scroll-smooth ml-2 ">
          <div className="flex ">
            {movies?.map((movie) => (
              <Link key={movie.id} to={"/movie/" + movie.id}>
                <MovieCard
                  title={movie?.title}
                  movieId={movie?.id}
                  date={movie?.release_date}
                  rating={movie?.vote_average?.toFixed(1)}
                  poster_path={movie?.poster_path}
                  textColor={textColor}
                  bgColor={"opacity-100"}
                />
              </Link>
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
