import React, { useEffect, useState } from "react";
import Logo from "../assets/netflix-logo.png";
import { Avatar, Box, IconButton, ListItem, Tooltip } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { toggleToGptPage } from "../utils/slices/gptSlice";
import { SUPPORTED_LANG } from "../utils/constants";
import { changeLanguage } from "../utils/slices/configSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isGptPageActive = useSelector((store) => store.gpt.showGptSearchPage);

  const user = useSelector((store) => store.user);
  const path = useSelector((store) => store.path.path);

  useEffect(() => {
    const unsubsrcibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    handleGptSearchClick();
    // unsubscribe when component unmounts
    return () => unsubsrcibe();
  }, []);

  // const handleClick = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleToGptPage());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-full bg-gradient-to-b from-black flex justify-between items-center absolute z-10 p-1 md:p-4">
      <Link to="/browse">
        <div className="w-28 md:w-44">
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      {user && (
        <div className="flex items-center justify-between">
          {path === "/gptSearch" && (
            <div>
              <select
                className="p-1 mr-2 md:p-2 md:mr-4 rounded-md bg-gray-900 text-white hover:bg-slate-700"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANG.map((lang) => (
                  <option key={lang.name} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          {path === "/gptSearch" ? (
            <Link to="/browse">
              <div
                onClick={handleGptSearchClick}
                className=" px-2 py-1 md:px-4 md:py-1 md:mr-2 font-medium text-xs md:text-base bg-green-400 text-black rounded-lg flex cursor-pointer hover:bg-green-500"
              >
                <button>Home</button>
              </div>
            </Link>
          ) : (
            <Link to="/gptSearch">
              <div
                onClick={handleGptSearchClick}
                className=" px-2 py-1 md:px-4 md:py-1 md:mr-2 font-medium text-xs md:text-base bg-green-400 text-black rounded-lg flex cursor-pointer hover:bg-green-500"
              >
                <button>GPT Search</button>
              </div>
            </Link>
          )}

          <div className="text-sm">
            <Box>
              <Tooltip>
                <IconButton
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <Avatar className="" sx={{ width: 30, height: 30 }}>
                    {user?.displayName?.at(0)}
                  </Avatar>
                </IconButton>
              </Tooltip>
            </Box>

            {isOpen && (
              <div
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="bg-white md:w-[120px] right-6 absolute rounded-md z-30"
              >
                <Link to="/browse">
                  <ListItem className="cursor-pointer hover:bg-slate-300 hover:rounded-md">
                    <HomeIcon />
                    Home
                  </ListItem>
                </Link>
                <Link to="/favourite">
                  <ListItem className="cursor-pointer hover:bg-slate-300 hover:rounded-md">
                    <FavoriteBorderIcon />
                    Favourites
                  </ListItem>
                </Link>
                <Link to="/watchlist">
                  <ListItem className="cursor-pointer hover:bg-slate-300 hover:rounded-md">
                    <BookmarkAddOutlinedIcon />
                    Watchlist
                  </ListItem>
                </Link>

                <ListItem
                  onClick={handleSignOut}
                  className="cursor-pointer hover:bg-slate-300 hover:rounded-md"
                >
                  <Logout />
                  Logout
                </ListItem>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
