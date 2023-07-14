import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  InputGroup,
  Input,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  const apiKey = "ce0659c825d9b20b83594dba4f3043c8";
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;

  const [searchOut, setSearchOut] = useState([]);

  const handleSearch = (query) => {
    try {
      axios
        .get(`${url}&language=en-US&query=${query}&page=1&include_adult=false`)
        .then((res) => {
          setSearchOut(res.data.results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(searchOut, "seareched");

  return (
    <Flex
      mb={"3rem"}
      w={"full"}
      h={"40vh"}
      backgroundImage={
        "url(https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/640776f5bf589aa0c82c42e4_movie%20poster%20design.jpg)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        //   m={'0 20rem'}
        width={"100%"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.900, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"#dbd9ce"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Unleash Your Inner Film Buff: Explore, Stream, and Discover...
          </Text>
          <Box w={"100%"} pt={"30"}>
            <InputGroup
              bg="blackAlpha.700"
              color="#dbd9ce"
              p={6}
              borderRadius={15}
              width="90%"
              m="auto"
            >
              {/* <Search2Icon bg='transparent' boxSize={8} m={2} /> */}
              <BiSearch color="#dbd9ce" size={"3rem"} />
              <Input
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
                ml={10}
                variant="unstyled"
                fontWeight={600}
                size="lg"
                fontSize={20}
                type="text"
                placeholder="What is Your fav. Movie ?"
              />
            </InputGroup>
            {
             searchOut.length >0 && ( 
            <Stack ml={'7rem'} p={'1rem 2rem'} bg={'black'} position={"absolute"}>
              {
                searchOut?.map((ele)=>(
                  <Box>{ele?.title}</Box>
                ))
              }
            </Stack>)
            }
          </Box>
        </Stack>
      </VStack>
    </Flex>
  );
}
