import React from "react";
import Header from "./Header";
import BackgroundImg from "../assets/netflix-bg.jpg";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="">
        <img className="bg-contain" src={BackgroundImg} alt="bg-img" />
      </div>
      <div className="absolute inset-0 bg-slate-900 bg-opacity-50"></div>
    </div>
  );
};

export default Login;
