import { Box, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ child }) => {
  const [user, setuser] = useState("");
  let toast = useToast();

  useEffect(() => {
    setuser(localStorage.getItem("email") || "");
  }, []);

  console.log(user, "usermail");
  return (
    <>
      {user == null ? (
        <>
          {toast({
            title: "Login to your Account!",
            status: "info",
            duration: "3000",
            isCloseble: true,
            variant: "top-accent",
            position: "top-right",
          })}
          <Navigate to={"/"} />
        </>
      ) : (
        child
      )}
    </>
  );
};
