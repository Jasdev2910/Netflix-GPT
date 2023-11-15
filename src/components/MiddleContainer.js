import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useCredit from "./../hooks/useCredit";
import CastCard from "./CastCard";

const MiddleContainer = () => {
  const movieId = useParams();
  useCredit(movieId);
  const cast = useSelector((store) => store.credits.cast);
  return (
    <div>
      <div className="relative flex overflow-x-scroll no-scrollbar scroll-smooth ">
        {cast?.cast?.map((cast) => (
          <CastCard
            img_path={cast.profile_path}
            name={cast.name}
            character={cast.character}
          />
        ))}
      </div>
    </div>
  );
};

export default MiddleContainer;
