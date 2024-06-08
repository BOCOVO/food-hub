import { useField } from "formik";
import PasswordInputDumb, {
  PasswordInputProps as PasswordInputDumbProps,
} from "./dumbs/PasswordInput";

interface PasswordInputProps
  extends Omit<PasswordInputDumbProps, "value" | "onChange" | "error"> {
  name: string;
}

const PasswordInput = ({ name, ...props }: PasswordInputProps) => {
  const [{ value }, { error }, { setValue }] = useField<string>(name);

  return (
    <PasswordInputDumb
      error={error}
      value={value}
      onChange={setValue}
      {...props}
    />
  );
};

export default PasswordInput;
