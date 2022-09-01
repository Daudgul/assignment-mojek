import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Logo from "./img/logo.png";
import { extendTheme } from "@chakra-ui/react";

//  Update the breakpoints as key-value pairs
const breakpoints = {
  sm: "300px",
  md: "768px",
  lg: "960px",
  xl: "1300px",
  "2xl": "1536px",
};

//  Extend the theme
const theme = extendTheme({ breakpoints });

function App() {
  const [check, setCheck] = useState(true);

  const signUp = {
    mainHeading: "Portfolio management, simplified.",
    subHeading:
      "Invest in secure assets and manage your performance from mojek",
  };
  const signIn = {
    mainHeading: "Manage your full financial life.",
    subHeading: "Get business-level intel on your expenses & investments",
  };
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      fontFamily="sans-serif"
      alignItems={"stretch"}
      minHeight={"100vh"}
    >
      <Box
        width={{ base: "100%", md: "50%" }}
        display="flex"
        flexDirection={"column"}
        justifyContent="space-between"
        padding={"5% 8%"}
      >
        <Image
          width={{ base: "120px", lg: "192px" }}
          height={{ base: "44px", lg: "55px" }}
          mb={{ base: 30, md: "70px", lg: "100px" }}
          src={Logo}
          alt="Logo"
        />
        <Box
          mx={{ base: "auto", md: 0 }}
          width={{ base: "300px", sm: "400px", md: "auto" }}
        >
          {check ? (
            <SignUp setCheck={setCheck} />
          ) : (
            <Login setCheck={setCheck} />
          )}
        </Box>
        <Text
          mt={{ base: 14, lg: 20, xl: 24 }}
          fontWeight="400"
          fontSize="13px"
          lineHeight="18px"
        >
          Terms of Service | Privacy Policy
        </Text>
      </Box>

      <Box
        display={{ base: "none", md: "block" }}
        width={{ base: "100%", md: "50%" }}
        background={"#0195FF"}
        color="white"
        padding={"6% 6%"}
      >
        <Text fontSize={{ lg: 40, md: 30, sm: 20 }} fontWeight="600">
          {check ? signUp.mainHeading : signIn.mainHeading}{" "}
        </Text>
        <Text fontSize={"16px"}>
          {check ? signUp.subHeading : signIn.subHeading}
        </Text>
        <Flex gap={3} marginY="18px">
          <div className={check ? "dot" : "active"}></div>
          <div className={check ? "active" : "dot"}></div>
          <div className="dot"></div>
        </Flex>
      </Box>
    </Stack>
  );
}

export default App;
