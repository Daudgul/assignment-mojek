import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  extendTheme,
  Box,
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

export default function CustomInput({ type, label }) {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <FormControl variant="floating" id="first-name">
          <Input
            _placeholder={{ color: "gray.500", fontSize: "4px" }}
            placeholder=" "
            type={type}
          />

          <FormLabel>{label}</FormLabel>
        </FormControl>
      </Box>
    </ChakraProvider>
  );
}
