import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";
import { Home } from "./Home";

export const Login = () => {
  const [value, setValue] = useState("");

  const handleLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    }).catch((error)=>{
        console.log(error)
    })
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  }, []);

  return (
    <div>
        {
            value ? <Home/> :<button onClick={handleLogin}>Login With Google</button>
        }
    </div>
  );
};
