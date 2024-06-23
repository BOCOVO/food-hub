import { Meta, StoryObj } from "@storybook/react";

import RestaurantCard from "./RestaurantCard";

export default {
  title: "components/restaurant/RestaurantCard",
  component: RestaurantCard,
  args: {
    name: "Mark Yand",
    image:
      "https://res.cloudinary.com/dzrig8i9i/image/upload/v1718454311/itlfxmhfnzg9psu1oiiu.jpg",
    keyWords: ["Burger", "Cookie", "Chicken"],
  },
} as Meta<typeof RestaurantCard>;

export const DefaultRestaurantCard: StoryObj<typeof RestaurantCard> = {};
