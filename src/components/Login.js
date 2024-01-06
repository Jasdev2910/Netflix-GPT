import React, { useRef, useState } from "react";
import Header from "./Header";
import BackgroundImg from "../assets/netflix-bg.jpg";
import { checkValidData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isUser, setIsUser] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      name?.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return; //return if there's an error

    // Sign In Sign Up logic

    if (!isUser) {
      // Sign Up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Invalid Email");
        });
    } else {
      // Sign In logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Invalid Login Credentials");
        });
    }
  };

  const handleToggle = () => {
    setIsUser(!isUser);
  };

  return (
    <div className="">
      <Header />
      <div>
        <img
          className="absolute object-cover bg-image w-full h-screen"
          src={BackgroundImg}
          alt="bg-img"
        />
      </div>
      <div className="absolute inset-0 object-cover bg-slate-900 bg-opacity-70"></div>
      <div className="mt-8 text-white py-4 px-10 md:px-0 bg-black absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-opacity-75 rounded-xl">
        <div
          onSubmit={(e) => e.preventDefault()}
          className="max-w-[250px] md:min-w-[450px] py-5 "
        >
          <div className="flex flex-col md:px-10">
            <h1 className=" text-2xl md:text-4xl font-semibold mb-6">
              {isUser ? "Sign In" : "Sign Up"}
            </h1>
            {!isUser && (
              <input
                ref={name}
                className="px-4 py-4 mb-5 bg-gray-700 rounded-md "
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              ref={email}
              className=" px-4 py-4 mb-5 bg-gray-700 rounded-md "
              type="text"
              placeholder="Email Address"
            />
            <input
              ref={password}
              className="px-4 py-4 mb-5 bg-gray-700 rounded-md "
              type="password"
              placeholder="Password"
            />
            <p className="w-[300px] pb-2 text-red-700 text-base">
              {errorMessage}
            </p>
            <button
              onClick={handleButtonClick}
              className="px-4 py-4 mb-5 font-medium bg-red-700 rounded-md "
            >
              {isUser ? "Sign In" : "Sign Up"}
            </button>
            <p className="pt-8 text-sm md:text-base text-gray-400">
              {isUser ? "New to Netflix? " : "Already a user? "}
              <span
                onClick={handleToggle}
                className="cursor-pointer font-semibold text-white"
              >
                {isUser ? "Sign Up" : "Sign In"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
