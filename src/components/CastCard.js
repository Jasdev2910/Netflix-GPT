import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const CastCard = ({ img_path, name, character }) => {
  return (
    <div className="w-[200px] h-[150px] text-black">
      <div className="w-52 ">
        <img src={IMAGE_CDN_URL + img_path} alt="cast-img" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{character}</p>
      </div>
    </div>
  );
};

export default CastCard;
