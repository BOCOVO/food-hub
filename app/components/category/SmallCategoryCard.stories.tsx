import { Meta, StoryObj } from "@storybook/react";

import SmallCard from "./SmallCategoryCard";

export default {
  title: "components/category/SmallCard",
  component: SmallCard,
  args: {
    img: "https://picsum.photos/200",
    name: "Burger",
    onPress: () => {},
  },
} as Meta<typeof SmallCard>;

export const DefaultSmallCard: StoryObj<typeof SmallCard> = {};
