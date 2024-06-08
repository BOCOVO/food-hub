import { Box } from "@gluestack-ui/themed";
import { Formik } from "formik";
import TextInput from "../inputs/TextInput";
import PasswordInput from "../inputs/PasswordInput";
import PrimarySolidButton from "../buttons/PrimarySolidButton";
import { registerValidationSchema } from "@/utils/validationSchema";
import { useMedusa } from "medusa-react";

interface FormValue {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

const defaultFormValue = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

const RegisterForm = () => {
  const { client } = useMedusa();

  const register = async ({
    email,
    firstName,
    lastName,
    password,
  }: Required<FormValue>) => {
    console.log("creating user");
    try {
      await client.customers.create({
        email,
        password,
        first_name: firstName,
        last_name: lastName,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik<FormValue>
      initialValues={defaultFormValue}
      onSubmit={(inputs) => register(inputs as Required<FormValue>)}
      validationSchema={registerValidationSchema}
    >
      {({ handleSubmit }) => (
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
