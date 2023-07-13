import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { BsDiscord, BsTwitter, BsBookmark, BsGithub } from "react-icons/bs";
import {
  MdCatchingPokemon,
  MdOutlineMovieFilter,
  MdOutlineWatchLater,
} from "react-icons/md";
import { FaSearchengin } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavComp } from "./NavComponent";

export const Navbar = () => {
  const [mail, setMail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setMail(localStorage.getItem("email") || "");
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setMail(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(mail);
  return (
    <>
      {/* Phone Nav */}
      <Center
        width={"100%"}
        position={"fixed"}
        top={"0"}
        p={"1rem"}
        bg={"#182848"}
        zIndex={10}
        display={["block", "block", "block", "none"]}
      >
        <Flex justifyContent={"space-between"}>
          <Box>
            <Heading>Movie-Station</Heading>
          </Box>
          <Stack
            bg={"transparent"}
            direction={"row"}
            spacing="24px"
            alignItems={"center"}
            _hover={{ ".nav_text": { opacity: 1 } }}
          >
            <Link to={"/"}>
              <NavComp icon={<MdOutlineMovieFilter />} />
            </Link>
            <Link to={"/favourites"}>
              <NavComp icon={<BsBookmark />} />
            </Link>
            <Link to={"/watchlist"}>
              <NavComp icon={<MdOutlineWatchLater />} />
            </Link>
            <Link to={"/search"}>
              <NavComp icon={<FaSearchengin />} />
            </Link>
          </Stack>
        </Flex>
      </Center>
      {/* Phone Nav */}

      {/* Main Nav  */}
      <Center
        width={"100%"}
        position={"fixed"}
        top={"0"}
        p={"1rem"}
        bg={"#182848"}
        zIndex={10}
        display={["none", "none", "none", "block"]}
      >
        <Flex
          // position={"fixed"}
          width={"80%"}
          m={"auto"}
          justify={"space-between"}
          zIndex={10}
          alignItems={"center"}
          bg={"transparent"}
          style={{ transition: "all 300ms ease " }}
        >
          <Box>
            <Heading>Movie-Station</Heading>
          </Box>
          <Stack
            bg={"transparent"}
            direction={"row"}
            spacing="24px"
            alignItems={"center"}
            _hover={{ ".nav_text": { opacity: 1 } }}
          >
            <Link to={"/"}>
              <NavComp child={"Movies"} icon={<MdOutlineMovieFilter />} />
            </Link>
            <Link to={"/favourites"}>
              <NavComp child={`Favourites`} icon={<BsBookmark />} />
            </Link>
            <Link to={"/watchlist"}>
              <NavComp child={`Watchlist`} icon={<MdOutlineWatchLater />} />
            </Link>
            <Link to={"/search"}>
              <NavComp child={"Search"} icon={<FaSearchengin />} />
            </Link>
          </Stack>
          <Stack direction={"row"} spacing="24px">
            {mail ? (
              <Button
              colorScheme="red"
                onClick={() => {
                  localStorage.removeItem("email");
                  setMail("");
                }}
              >
                Logout
              </Button>
            ) : (
              <Button onClick={handleLogin}>Login</Button>
            )}
          </Stack>
        </Flex>
      </Center>
      {/* Main Nav  */}
    </>
  );
};
