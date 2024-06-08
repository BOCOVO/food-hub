import { Link as CoreLink } from "expo-router";
import { styled } from "@gluestack-style/react";

export const Link = styled(
  CoreLink,
  {
    variants: {
      theme: {
        primary: {
          fontSize: 90,
          color: "$primary",
          fontFamily: "SofiaPro_500Medium",
        },
      },
    },
  },
  {},
);
