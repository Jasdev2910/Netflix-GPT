import React from "react";
import Logo from "../assets/netflix-logo.png";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="p-5 md:p-10 md:w-[100%] bg-[#343a40] ">
      <div className="flex justify-evenly list-none text-gray-300">
        <div className="">
          <img className="w-28 md:w-36" src={Logo} alt="logo" />
          <h1 className="py-2">
            copyright © <br />
            {date}
          </h1>
        </div>
        <div className="px-5">
          <h1 className="text-lg font-bold ">Company</h1>
          <li className="hover:text-white">About</li>
          <li className="hover:text-white">Team</li>
          <li className="hover:text-white">Offers</li>
        </div>
        <div className="hidden md:visible">
          <h1 className="text-lg font-bold ">Contact Us</h1>{" "}
          <li className="hover:text-white">Help & Support</li>
          <li className="hover:text-white">Partner with us</li>
          <li className="hover:text-white">Ride with us</li>
        </div>
        <div className="mx-3 md:px-0">
          <h1 className="text-lg font-bold ">Legal</h1>
          <li className="hover:text-white">Terms & Condition</li>
          <li className="hover:text-white">Cookie Policy</li>
          <li className="hover:text-white">Privacy Policy</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
