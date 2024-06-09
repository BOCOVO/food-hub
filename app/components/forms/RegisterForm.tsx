import { Box } from "@gluestack-ui/themed";
import { Formik } from "formik";
import TextInput from "../inputs/TextInput";
import PasswordInput from "../inputs/PasswordInput";
import PrimarySolidButton from "../buttons/PrimarySolidButton";
import { registerValidationSchema } from "@/utils/validationSchema";
import { router } from "expo-router";
import { ROUTES } from "@/constants/routes";
import { useRegister } from "@/hooks/useRegister";

export interface RegisterFormValue {
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
}

const defaultFormValue = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

const RegisterForm = () => {
  const { register } = useRegister();
  const handlerRegister: typeof register = async (...params) => {
    try {
      await register(...params);

      router.replace(ROUTES.HOME);
    } catch (_) {
      // do nothing else, error already handled by register
    }
  };

  return (
    <Formik<RegisterFormValue>
      initialValues={defaultFormValue}
      onSubmit={(inputs, helper) =>
        handlerRegister(inputs as Required<RegisterFormValue>, helper)
      }
      validationSchema={registerValidationSchema}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Box mt="$10">
          <TextInput
            label="First Name"
            name="firstName"
            placeholder="Jonh"
            isRequired
            autoComplete="name-given"
          />

          <TextInput
            label="Last Name"
            name="lastName"
            placeholder="Doe"
            isRequired
            autoComplete="family-name"
          />

          <TextInput
            label="E-mail"
            name="email"
            placeholder="jonh.doe@me.com"
            isRequired
            autoComplete="username-new"
            inputMode="email"
          />

          <PasswordInput
            label="Password"
            name="password"
            placeholder="Enter your password"
            isRequired
            autoComplete="password-new"
          />

          <PrimarySolidButton
            mt="$8"
            alignSelf="center"
            label="Sign Up"
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

export default RegisterForm;
