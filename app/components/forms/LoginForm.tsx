import { Box } from "@gluestack-ui/themed";
import { Formik } from "formik";
import TextInput from "../inputs/TextInput";
import PasswordInput from "../inputs/PasswordInput";
import PrimarySolidButton from "../buttons/PrimarySolidButton";
import { loginValidationSchema } from "@/utils/validationSchema";

interface FormValue {
  email?: string;
  password?: string;
}

const LoginForm = () => {
  return (
    <Formik<FormValue>
      initialValues={{ email: "", password: "" }}
      onSubmit={() => {}}
      validationSchema={loginValidationSchema}
    >
      {({ handleSubmit }) => (
        <Box mt="$10">
          <TextInput
            label="E-mail"
            name="email"
            placeholder="jonh.doe@me.com"
            isRequired
            autoComplete="username"
            inputMode="email"
          />

          <PasswordInput
            label="Password"
            name="password"
            placeholder="Enter your password"
            isRequired
            autoComplete="password"
          />

          <PrimarySolidButton
            mt="$8"
            alignSelf="center"
            label="Login"
            width="70%"
            onPress={() => {
              handleSubmit();
            }}
          />
        </Box>
      )}
    </Formik>
  );
};

export default LoginForm;
