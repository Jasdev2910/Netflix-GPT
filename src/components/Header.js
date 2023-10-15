import React from "react";
import Logo from "../assets/netflix-logo.png";

const Header = () => {
  return (
    <div className="absolute z-10 p-5">
      <img className="w-44 " src={Logo} alt="logo" />
    </div>
  );
};

export default Header;
