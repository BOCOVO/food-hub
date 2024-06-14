import { LoginFormValue } from "@/components/forms/LoginForm";
import { showErrorToast, showSuccessToast } from "@/helpers/showToast";
import { FormikConfig } from "formik";
import { useMedusa } from "medusa-react";

export const useLogin = () => {
  const { client } = useMedusa();

  const login: FormikConfig<LoginFormValue>["onSubmit"] = async ({
    email,
    password,
  }) => {
    try {
      await client.auth.authenticate({
        email,
        password,
      });

      showSuccessToast({
        description: "Welcome ! You are logged in successfully.",
      });
    } catch (error) {
      showErrorToast({
        description:
          "We've encountered an error trying to connect you. Ensure that you credential is correct.",
      });
      throw error;
    }
  };

  return { login };
};
