import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";
import Avatar from "../assets/avatar.png";

const CastCard = ({ img_path, name, character }) => {
  return (
    <div className="text-white m-3 shadow-xl rounded-xl outline">
      <div className="w-[120px] object-cover">
        {img_path !== null ? (
          <img
            className="rounded-t-lg "
            src={IMAGE_CDN_URL + img_path}
            alt="cast-img"
            loading="lazy"
          />
        ) : (
          <img
            className="rounded-t-lg object-cover"
            src={Avatar}
            alt="cast-img"
          />
        )}
      </div>
      <div className="">
        <h3 className="pl-2 text-lg font-semibold">{name}</h3>
        <p className="text-sm  pl-2 pb-2">{character}</p>
      </div>
    </div>
  );
};

export default CastCard;
