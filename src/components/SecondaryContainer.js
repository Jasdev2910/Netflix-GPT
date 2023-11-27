import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" pl-3 md:pl-10 pt-10 bg-black flex flex-col">
      <div className=" -mt-[50px] md:-mt-[250px]">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
          textColor={"text-white"}
          gradient={"from-black from-40% via-gray-950"}
        />
        <MovieList
          title={"Top Rated"}
          movies={movies.topRatedMovies}
          textColor={"text-white"}
          gradient={"from-black from-40% via-gray-950"}
        />
        <MovieList
          title={"Popular"}
          movies={movies.popularMovies}
          textColor={"text-white"}
          gradient={"from-black from-40% via-gray-950"}
        />
        <MovieList
          title={"Upcoming"}
          movies={movies.upComingMovies}
          textColor={"text-white"}
          gradient={"from-black from-40% via-gray-950"}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
