import { Meta, StoryObj } from "@storybook/react";

import PasswordInput from "./PasswordInput";

export default {
  title: "components/inputs/PasswordInput",
  component: PasswordInput,
  args: {
    help: "Help message",
    label: "Label",
    isRequired: true,
    placeholder: "Enter your password",
  },
} as Meta<typeof PasswordInput>;

export const DefaultInputWrapper: StoryObj<typeof PasswordInput> = {};
