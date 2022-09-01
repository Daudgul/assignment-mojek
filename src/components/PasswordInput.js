import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  extendTheme,
  Box,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-12px)",
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              // color: 'red',

              label: {
                ...activeLabelStyles,
                color: "#0195FF",
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "16px",
              textTransform: "capitalize",

              top: 1,
              left: 1,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "transparent",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

export default function PasswordInput({ type, label }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <FormControl variant="floating" id="first-name">
          <InputGroup>
            <Input placeholder=" " type={showPassword ? "text" : type} />
            <FormLabel>{label}</FormLabel>
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Box>
    </ChakraProvider>
  );
}
