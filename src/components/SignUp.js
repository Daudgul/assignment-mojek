import { Stack, Button, Text } from "@chakra-ui/react";
import CustomInput from "./CustomInput";
import PasswordInput from "./PasswordInput";
import NumberInput from "./NumberInput";

export default function SignUp({ setCheck }) {
  return (
    <Stack spacing={4} color=" #595959" fontWeight={"400"}>
      <Text fontSize={"22px"}>Sign up</Text>
      <Text fontSize={"14px"} paddingBottom={"20px"}>
        Register with your email or mobile
      </Text>

      <CustomInput type="text" label="First Name" />

      <NumberInput />

      <CustomInput type="email" label="Email Id" />

      <PasswordInput type="Password" label="Password" />
      <PasswordInput type="Password" label="Confirm Password" />

      <Stack spacing={10} pt={2}>
        <Button
          onClick={() => setCheck(false)}
          loadingText="Submitting"
          size="lg"
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
        >
          Login
        </Button>
      </Stack>
      <Stack pt={6}>
        <Text align={"center"}>
          Already a user?
          <Button
            variant="link"
            onClick={() => setCheck(false)}
            color={"blue.400"}
            pl={1}
          >
            Login
          </Button>
        </Text>
      </Stack>
    </Stack>
  );
}
