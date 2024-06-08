import { Meta, StoryObj } from "@storybook/react";

import TextInput from "./TextInput";

export default {
  title: "components/inputs/TextInput",
  component: TextInput,
  args: {
    error: "Error message",
    help: "Help message",
    label: "Label",
    isRequired: true,
    placeholder: "Enter your name",
    inputMode: "email",
  },
} as Meta<typeof TextInput>;

export const DefaultInputWrapper: StoryObj<typeof TextInput> = {};
