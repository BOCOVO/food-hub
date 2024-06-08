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
    value: "John Doe",
  },
} as Meta<typeof TextInput>;

export const DefaultInputWrapper: StoryObj<typeof TextInput> = {};
