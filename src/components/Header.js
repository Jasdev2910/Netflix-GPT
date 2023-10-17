import React, { useEffect, useState } from "react";
import Logo from "../assets/netflix-logo.png";
import { Avatar, Box, IconButton, ListItem, Tooltip } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  return (
    <div className="w-full  flex justify-between absolute z-10 p-5">
      <img className="w-44 " src={Logo} alt="logo" />
      {user && (
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
      )}
    </div>
  );
};

export default Header;
