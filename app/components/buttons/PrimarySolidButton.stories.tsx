import { Meta, StoryObj } from "@storybook/react";
import PrimarySolidButton from "./PrimarySolidButton";

export default {
  title: "components/buttons/PrimarySolidButton",
  component: PrimarySolidButton,
  args: {
    label: "Primary Solid Button",
  },
} as Meta<typeof PrimarySolidButton>;

export const DefaultPrimarySolidButton: StoryObj<typeof PrimarySolidButton> =
  {};
