import { Box } from "@chakra-ui/react";

function GradientBackground() {
  return (
    <Box
    //   bgGradient="linear(to-r, #3E5151, #DECBA4)"
      bgGradient="linear(to-t, #041e35, #041e35)"
      h="100vh"
      w="100vw"
      position="fixed"
      top={0}
      left={0}
    />
  );
}

export default GradientBackground;