import { object, string } from "yup";
import {
  requiredFieldMessage,
  mustBeAEmailAddress,
  passwordRequirementMsg,
} from "@/constants/messages";

export const passwordRegex =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";

const fieldRequiredValidation = string().required(requiredFieldMessage);
const emailFieldValidation = fieldRequiredValidation.email(mustBeAEmailAddress);

export const loginValidationSchema = object({
  email: emailFieldValidation,
  password: fieldRequiredValidation,
});

export const registerValidationSchema = object({
  firstName: fieldRequiredValidation,
  lastName: fieldRequiredValidation,
  email: emailFieldValidation,
  password: fieldRequiredValidation.matches(
    new RegExp(passwordRegex),
    passwordRequirementMsg,
  ),
});
