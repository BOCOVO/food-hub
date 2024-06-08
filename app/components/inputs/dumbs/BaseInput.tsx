import { Input, InputField } from "@gluestack-ui/themed";
import InputWrapper, { InputWrapperProps } from "../InputWrapper";
import { View } from "react-native";
import { ComponentProps, ReactNode } from "react";
import { Colors } from "@/constants/colors";

export interface BaseInputProps extends InputWrapperProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  icon?: ReactNode;
  type?: ComponentProps<typeof InputField>["type"];
  inputMode?: ComponentProps<typeof InputField>["inputMode"];
  autoComplete?: ComponentProps<typeof InputField>["autoComplete"];
}

const BaseInput = ({
  value,
  onChange,
  placeholder,
  icon,
  type = "text",
  inputMode,
  autoComplete,
  ...wrapperProps
}: BaseInputProps) => {
  return (
    <View
      style={{
        shadowColor: Colors.inputShadow,
        shadowOffset: { width: 15, height: 15 },
        shadowOpacity: 0.25,
        shadowRadius: 30,
      }}
    >
      <InputWrapper {...wrapperProps}>
        <Input
          $focus-borderColor="$primary"
          backgroundColor="$white"
          borderRadius={10}
          paddingHorizontal={12}
          minHeight={65}
          style={{
            elevation: 20,
            shadowColor: Colors.inputShadowWithAlpha,
          }}
        >
          <InputField
            type={type}
            placeholderTextColor="$grayAn1"
            value={value}
            fontSize={17}
            placeholder={placeholder}
            inputMode={inputMode}
            autoComplete={autoComplete}
          />

          {icon}
        </Input>
      </InputWrapper>
    </View>
  );
};

export default BaseInput;
