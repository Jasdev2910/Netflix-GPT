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
import VideoList from "./VideoList";

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
  const recommended = useSelector((store) => store.movies.recommended);
  const videos = useSelector((store) => store.media.videos);
  return (
    <div className="mt-24 px-3 md:mt-0 md:px-8 md:py-10">
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
      {/* <div className="overflow-x-scroll no-scrollbar scroll-smooth ">
        <VideoList />
      </div> */}
      <div className="py-3 md:px-5 md:py-5 ">
        <h2 className="font-semibold text-2xl md:pt-3 text-black">Social</h2>
        <div className="w-full flex flex-col items-center">
          <Review
            key={review?.id}
            userName={review?.author_details?.username}
            rating={review?.author_details?.rating}
            date={review?.created_at}
            content={review?.content}
            lineClamp={"line-clamp-4"}
          />
          <Link to="/review">
            <button className="px-2 py-1 md:py-2 text-sm bg-[#b5e2fa] rounded-lg transition hover:-translate-y-1">
              View All
            </button>
          </Link>
        </div>
      </div>
      {recommended.length !== 0 && (
        <div className="overflow-x-scroll no-scrollbar scroll-smooth">
          <MovieList
            title={"Recommended"}
            movies={recommended}
            textColor={"text-black"}
            gradient={"md:from-gray-300 from-40% via-gray-100"}
            bgColor={"bg-white"}
            titleColor={"text-red-600"}
          />
        </div>
      )}
      {movies.similarMovies.length !== 0 && (
        <div className="overflow-x-scroll no-scrollbar scroll-smooth">
          <MovieList
            title={"Similar"}
            movies={movies.similarMovies}
            textColor={"text-black"}
            gradient={"md:from-gray-300 from-40% via-gray-100"}
            bgColor={"bg-white"}
            titleColor={"text-red-600"}
          />
        </div>
      )}
    </div>
  );
};

export default MiddleContainer;
