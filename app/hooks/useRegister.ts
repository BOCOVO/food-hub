import { RegisterFormValue } from "@/components/forms/RegisterForm";
import { showErrorToast, showSuccessToast } from "@/helpers/showToast";
import { FormikHelpers } from "formik";
import { useMedusa } from "medusa-react";

export const useRegister = () => {
  const { client } = useMedusa();

  const register = async (
    { email, firstName, lastName, password }: Required<RegisterFormValue>,
    { setErrors }: FormikHelpers<RegisterFormValue>,
  ) => {
    try {
      await client.customers.create({
        email,
        password,
        first_name: firstName,
        last_name: lastName,
      });

      showSuccessToast({
        description: "Welcome ! Your account is successfully created.",
      });
    } catch (er) {
      // checking Axios error
      switch ((er as any)?.response?.data?.type) {
        case "duplicate_error":
          const message =
            "A customer with the given email already has an account. Log in instead.";
          showErrorToast({
            description: message,
          });
          setErrors({ email: message });
          throw er;

        default:
          break;
      }

      showErrorToast({
        description: "Unable to create account. Please try again.",
      });
      throw er;
    }
  };

  return { register };
};
