import { useState } from "react";
import BaseInput, { BaseInputProps } from "./BaseInput";
import {
  EyeIcon,
  EyeOffIcon,
  InputIcon,
  InputSlot,
} from "@gluestack-ui/themed";

export interface PasswordInputProps
  extends Omit<BaseInputProps, "type" | "icon"> {}

const PasswordInput = (props: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  return (
    <BaseInput
      type={showPassword ? "text" : "password"}
      icon={
        <InputSlot pr="$3" onPress={handleState}>
          <InputIcon
            as={showPassword ? EyeIcon : EyeOffIcon}
            color="$grayAn2"
          />
        </InputSlot>
      }
      {...props}
    />
  );
};

export default PasswordInput;
