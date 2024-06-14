import { Meta, StoryObj } from "@storybook/react";

import FavoriteIcon from "./FavoriteIcon";

export default {
  title: "components/products/FavoriteIcon",
  component: FavoriteIcon,
} as Meta<typeof FavoriteIcon>;

export const DefaultFavoriteIcon: StoryObj<typeof FavoriteIcon> = {};
export const ActiveFavoriteIcon: StoryObj<typeof FavoriteIcon> = {
  args: {
    isActive: true,
  },
};
