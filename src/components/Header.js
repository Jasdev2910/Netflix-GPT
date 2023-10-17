import React, { useState } from "react";
import Logo from "../assets/netflix-logo.png";
import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
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
                <Avatar className="bg-orange-500">
                  {user.displayName.charAt(0)}
                </Avatar>
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
