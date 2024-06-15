import { Meta, StoryObj } from "@storybook/react";

import LargeProductCard from "./LargeProductCard";

export default {
  title: "Components/LargeProductCard",
  component: LargeProductCard,
  args: {
    image:
      "https://res.cloudinary.com/dzrig8i9i/image/upload/v1718454311/itlfxmhfnzg9psu1oiiu.jpg",
    price: "10.35",
    starAverage: 4.5,
    starNumber: 28,
    subtitle: "Chicken, Cheese and pineapple",
    title: "Chicken Hawaiian",
    isFavorite: true,
  },
} as Meta<typeof LargeProductCard>;

export const DefaultLargeProductCard: StoryObj<typeof LargeProductCard> = {};
