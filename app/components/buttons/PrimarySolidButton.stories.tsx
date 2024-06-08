import { Meta, StoryObj } from "@storybook/react";
import PrimarySolidButton from "./PrimarySolidButton";
import { AlertCircleIcon } from "@gluestack-ui/themed";

export default {
  title: "components/buttons/PrimarySolidButton",
  component: PrimarySolidButton,
  args: {
    label: "Primary Solid Button",
    icon: <AlertCircleIcon size="lg" />,
  },
} as Meta<typeof PrimarySolidButton>;

export const DefaultPrimarySolidButton: StoryObj<typeof PrimarySolidButton> =
  {};
