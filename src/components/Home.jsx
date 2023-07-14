import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Genrebox } from "./Genrebox";
import { HomeCard } from "./HomeCard";

export const Home = () => {
  const [comingMovie, setComing] = useState([]);
  const [popMovie, setPopMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const api_key = "ce0659c825d9b20b83594dba4f3043c8";
  let base = "https://image.tmdb.org/t/p/original";

  const getComingMovies = () => {
    setIsLoading(true);
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`
        )
        .then((res) => {
          setComing(res.data.results);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getPopMovies = () => {
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
        )
        .then((res) => {
          setPopMovie(res.data.results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComingMovies();
    getPopMovies();
  }, []);

  console.log(popMovie)

  return (
    <Box color={"white"} p={"1rem 2rem"} position={"relative"} mt={"3rem"}>
      <SearchBar />
      
      <HomeCard Head={'Popular-Movies'} movies={popMovie} loading={isLoading} base={base}/>
      <HomeCard Head={'Upcoming-Movies'} movies={comingMovie} loading={isLoading} base={base}/>      

      <Genrebox />

      <HomeCard Head={'Trending-Movies'} movies={comingMovie} loading={isLoading} base={base}/>      
    </Box>
  );
};
