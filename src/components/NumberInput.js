import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

export default function NumberInput() {
  const [value, setValue] = useState();

  return (
    <PhoneInput
      placeholder={` Mobile Number`}
      international={"Mobile"}
      defaultCountry="IN"
      value={value}
      onChange={setValue}
    />
  );
}
