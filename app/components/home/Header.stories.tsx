import { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";

export default {
  title: "components/HomePage/Header",
  component: Header,
} as Meta<typeof Header>;

export const DefaultHeader: StoryObj<typeof Header> = {};
