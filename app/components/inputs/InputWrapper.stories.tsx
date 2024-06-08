import { Meta, StoryObj } from "@storybook/react";

import InputWrapper from "./InputWrapper";

export default {
  title: "components/inputs/InputWrapper",
  component: InputWrapper,
  args: {
    error: "Error message",
    help: "Help message",
    label: "Label",
    isRequired: true,
  },
} as Meta<typeof InputWrapper>;

export const DefaultInputWrapper: StoryObj<typeof InputWrapper> = {};
