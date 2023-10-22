import React, { useEffect, useState } from "react";
import Logo from "../assets/netflix-logo.png";
import { Avatar, Box, IconButton, ListItem, Tooltip } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import AI_LOGO from "../assets/Ai-logo.png";
import { toggleToGptPage } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isGptPageActive = useSelector((store) => store.gpt.showGptSearchPage);

  const user = useSelector((store) => store.user);
  // const avatarAlphabet =
  //   user.displayName === null ? user.displayName : user.displayName.at(0);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (user) => {
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
    // unsubscribe when component unmounts
    return () => unsubscibe();
  }, []);

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
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-full bg-gradient-to-b from-black flex justify-between absolute z-10 p-4">
      <img className="w-44 " src={Logo} alt="logo" />
      {user && (
        <div className="flex items-center justify-between">
          {isGptPageActive && (
            <div>
              <select
                className="p-2 mr-4 rounded-md bg-gray-900 text-white hover:bg-slate-700"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANG.map((lang) => (
                  <option value={lang.identifier}>{lang.name}</option>
                ))}
              </select>
            </div>
          )}
          <div className="px-4 py-2 mr-2 font-medium text-sm bg-green-400 text-black rounded-lg flex cursor-pointer hover:bg-green-500">
            <img className="w-4 mr-1 " alt="ai-logo" src={AI_LOGO} />
            <button onClick={handleGptSearchClick}>GPT Search</button>
          </div>
          <div>
            <Box>
              <Tooltip>
                <IconButton onClick={handleClick}>
                  <Avatar>{user?.displayName?.at(0)}</Avatar>
                </IconButton>
              </Tooltip>
            </Box>

            {isOpen && (
              <div className="bg-white w-[130px] right-10 absolute rounded-md">
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
