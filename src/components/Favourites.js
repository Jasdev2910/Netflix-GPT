import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addPath } from "../utils/slices/pathSlice";
import { removeFavouriteMovie } from "../utils/slices/moviesSlice";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import FavouriteIcon from "../assets/favourites.png";

const Favourites = () => {
  const favourites = useSelector((store) => store.movies.favourites);
  const dispatch = useDispatch();

  const pathname = window.location.pathname;

  useEffect(() => {
    dispatch(addPath(pathname));
  }, []);

  return (
    <div className="w-full min-h-screen pt-16 px-5 md:pt-[120px] md:pb-5 md:px-10 text-black bg-[#caf0f8]">
      <h2 className="text-3xl font-bold text-[#353535]">Favourites</h2>
      {favourites.length === 0 && (
        <div className="w-[200px] md:w-[300px] pt-32 md:pt-44 md:py-20 relative top-60 md:top-48 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <img src={FavouriteIcon} alt="favourite-icon" />
          <p className="text-center text-2xl font-bold text-[#023047]">
            No Favourite Movie
          </p>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-6 pl-2 mx-auto">
        {favourites?.map((movie) => (
          <div>
            <button
              onClick={() => {
                dispatch(removeFavouriteMovie(movie.id));
              }}
              className="relative top-[20px] text-gray-500 transition hover:-translate-y-1 hover:text-red-600 z-10"
            >
              <CancelTwoToneIcon />
            </button>
            <Link key={movie.id} to={"/movie/" + movie.id}>
              <MovieCard
                title={movie.title}
                movieId={movie?.id}
                date={movie?.release_date}
                rating={movie?.vote_average.toFixed(1)}
                poster_path={movie?.poster_path}
                textColor={"text-black"}
                bgColor={"opacity-100"}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
