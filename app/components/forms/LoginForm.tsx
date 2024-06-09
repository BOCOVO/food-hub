import { Box } from "@gluestack-ui/themed";
import { Formik } from "formik";
import TextInput from "../inputs/TextInput";
import PasswordInput from "../inputs/PasswordInput";
import PrimarySolidButton from "../buttons/PrimarySolidButton";
import { loginValidationSchema } from "@/utils/validationSchema";
import { useLogin } from "@/hooks/useLogin";
import { router } from "expo-router";
import { ROUTES } from "@/constants/routes";

export interface LoginFormValue {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { login } = useLogin();

  const handleLogin: typeof login = async (...params) => {
    try {
      await login(...params);
      router.replace(ROUTES.HOME);
    } catch (_) {}
  };

  return (
    <Formik<LoginFormValue>
      initialValues={{ email: "", password: "" }}
      onSubmit={handleLogin}
      validationSchema={loginValidationSchema}
    >
      {({ handleSubmit, isSubmitting }) => (
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
            isLoading={isSubmitting}
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
