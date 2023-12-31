import { Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

export const NavComp = ({ child, to, icon }) => {
  return (
    <Flex
      bg={"transparent"}
      style={{ transition: "all 300ms ease " }}
      _hover={{
        transform: "scale(1.1)",
        zIndex: "2",
        fontWeight: "800",
        background: "linear-gradient(to right, #ff00cc, #FFD700)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      cursor={"pointer"}
    >
      <Link href={to} >
        <Flex
          className="nav_text"
          ml={"1rem"}
          fontSize={"1.2rem"}
          fontWeight={"600"}
          color={"white"}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'1rem'}
          flexDirection={'row'}
        >
          {child}{icon}
        </Flex>
      </Link>
    </Flex>
  );
};
