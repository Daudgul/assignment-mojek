import { Checkbox, Stack, Link, Button, Text } from "@chakra-ui/react";
import CustomInput from "./CustomInput";
import PasswordInput from "./PasswordInput";

export default function Login({ setCheck }) {
  return (
    <Stack spacing={4} color=" #595959" fontWeight={"400"}>
      <Text fontSize={"22px"}>Login</Text>
      <Text fontSize={"14px"} paddingBottom={"20px"}>
        Type in your details to enter your mojek account
      </Text>
      <CustomInput type="text" label="Email address / Mobile" />

      <PasswordInput type="password" label="Password" />

      <Stack spacing={10}>
        <Stack
          direction={{ base: "column", sm: "row" }}
          align={"start"}
          justify={"space-between"}
        >
          <Checkbox>Remember me</Checkbox>
          <Link color={"blue.400"}>Forgot password?</Link>
        </Stack>
        <Button
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
        >
          Sign in
        </Button>
      </Stack>
      <Text align={"center"}>
        Don’t have an account?
        <Button
          variant="link"
          onClick={() => setCheck(true)}
          color={"blue.400"}
          pl={1}
        >
          Join Mojek?
        </Button>
      </Text>
    </Stack>
  );
}
