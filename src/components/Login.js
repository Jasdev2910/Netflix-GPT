import React from "react";
import Header from "./Header";
import BackgroundImg from "../assets/netflix-bg.jpg";

const Login = () => {
  return (
    <div className="">
      <Header />
      <div>
        <img
          className="absolute  bg-image  w-screen bg-cover bg-center "
          src={BackgroundImg}
          alt="bg-img"
        />
      </div>
      <div className="absolute inset-0 bottom-[-112px]  bg-slate-900 bg-opacity-70"></div>
      <div className="text-white py-10  bg-black absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-opacity-75 rounded-xl">
        <form className="min-w-[450px] px-20 py-5 flex flex-col">
          <h1 className="text-4xl font-semibold mb-6">Sign In</h1>
          <input
            className=" px-4 py-4 mb-5 bg-gray-700 rounded-md "
            type="text"
            placeholder="Email Address"
          />
          <input
            className="px-4 py-4 mb-5 bg-gray-700 rounded-md "
            type="password"
            placeholder="password"
          />
          <button className="px-4 py-4 mb-5 font-medium bg-red-700 rounded-md ">
            Sign In
          </button>
          <p className="pt-8 text-gray-400">
            New to Netflix?{" "}
            <span className="cursor-pointer font-semibold text-white">
              Sign Up Now
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
