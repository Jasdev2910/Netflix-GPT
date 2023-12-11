import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useCredit from "./../hooks/useCredit";
import CastCard from "./CastCard";
import useReview from "../hooks/useReview";
import Review from "./Review";
import useMovieVideo from "../hooks/useMovieVideo";
import YoutubeFrame from "./YoutubeFrame";
import useVideo from "../hooks/useVideo";
import useSimilarMovies from "../hooks/useSimilarMovies";
import MovieList from "./MovieList";
import useRecommendation from "../hooks/useRecommendation";

const MiddleContainer = () => {
  const movieId = useParams();

  useCredit(movieId);
  useReview(movieId);
  useVideo(movieId);
  useSimilarMovies(movieId);
  useRecommendation(movieId);

  const cast = useSelector((store) => store.credits.cast);
  const review = useSelector((store) => store.reviews?.review?.results[0]);
  const movies = useSelector((store) => store.movies);
  const videos = useSelector((store) => store.media.videos);
  return (
    <div className="px-8 py-10">
      <h3 className="font-semibold text-2xl text-black">Top Billed Cast</h3>
      <div className="pt-2 flex overflow-x-scroll no-scrollbar scroll-smooth">
        {cast?.cast?.map((cast) => (
          <CastCard
            key={cast?.id}
            img_path={cast?.profile_path}
            name={cast?.name}
            character={cast?.character}
          />
        ))}
      </div>
      <div className="px-5 py-5 ">
        <h2 className="font-semibold text-2xl pt-3 text-black">Social</h2>
        <div className=" w-full overflow-y-scroll no-scrollbar scroll-smooth ">
          <Review
            key={review?.id}
            userName={review?.author_details?.username}
            rating={review?.author_details?.rating}
            date={review?.created_at}
            content={review?.content}
            lineClamp={"line-clamp-4"}
          />
          <Link to="/review">
            <button className="px-2 py-2 ml-2 text-sm bg-[#b5e2fa] rounded-lg">
              View All...
            </button>
          </Link>
        </div>
      </div>
      <div className="overflow-x-scroll no-scrollbar scroll-smooth">
        <MovieList
          title={"Recommended"}
          movies={movies.recommended}
          textColor={"text-black"}
          gradient={"from-gray-300 from-40% via-gray-100"}
        />
      </div>
      <div className="  overflow-x-scroll no-scrollbar scroll-smooth">
        <MovieList
          title={"Similar"}
          movies={movies.similarMovies}
          textColor={"text-black"}
          gradient={"from-gray-300 from-40% via-gray-100"}
        />
      </div>
    </div>
  );
};

export default MiddleContainer;
