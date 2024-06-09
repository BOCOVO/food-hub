import { Meta, StoryObj } from "@storybook/react";

import IconButton from "./IconButton";
import { ChevronLeftIcon } from "@gluestack-ui/themed";

export default {
  title: "components/buttons/IconButton",
  component: IconButton,
  args: {
    icon: ChevronLeftIcon,
  },
} as Meta<typeof IconButton>;

export const DefaultIconButton: StoryObj<typeof IconButton> = {};
