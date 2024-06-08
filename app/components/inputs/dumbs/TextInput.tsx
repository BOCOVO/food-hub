import BaseInput, { BaseInputProps } from "./BaseInput";

export interface TextInputProps extends Omit<BaseInputProps, "type"> {}

const TextInput = (props: TextInputProps) => {
  return <BaseInput {...props} />;
};

export default TextInput;
