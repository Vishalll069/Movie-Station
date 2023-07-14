import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Skeleton,
  } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

export const HomeCard = ({Head, movies, loading, base}) => {
  return (
    <Box mr={"0"}>
        <Box color={"white"}>
          <Heading fontSize={"2xl"}>{Head}</Heading>
        </Box>

        <Flex
          overflowX={"auto"}
          gap={"1.7rem"}
          sx={{ "::-webkit-scrollbar": { display: "none" } }}
          p={"2%"}
          w={"100%"}
          h={"100%"}
        >
          {movies?.map((ele, i) => {
            return (
              <Link key={i + 1} className="link2" to={`/video`} state={ele}>
                <Skeleton isLoaded={!loading}>
                  <Box
                    width={"14rem"}
                    _hover={{
                      transform: "scale(1.2)",
                      border: "1px solid white",
                    }}
                    borderRadius={"10px"}
                    style={{ transition: "all 300ms ease " }}
                  >
                    <Image
                      src={base + ele.poster_path}
                      borderRadius={"10px"}
                      w={"100%"}
                      h={"100%"}
                      objectFit={"cover"}
                      objectPosition={"center top"}
                    />
                  </Box>
                </Skeleton>
              </Link>
            );
          })}
        </Flex>
      </Box>
  )
}
