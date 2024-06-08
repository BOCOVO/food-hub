import { Text as CoreText } from "@gluestack-ui/themed";
import { styled } from "@gluestack-style/react";

export const Text = styled(
  CoreText,
  {
    variants: {
      size: {
        xs: {
          fontSize: 12,
          fontFamily: "SofiaPro_300Light",
        },

        sm: {
          fontSize: 15,
          fontFamily: "SofiaPro_400Regular",
          lineHeight: 21,
        },

        md: {
          fontSize: 16,
          fontFamily: "SofiaPro_500Medium",
          lineHeight: 22,
        },

        lg: {
          fontSize: 18,
          fontFamily: "SofiaPro_600SemiBold",
        },

        xl: {
          fontSize: 24,
          fontFamily: "SofiaPro_500Medium",
        },

        "2xl": {
          fontSize: 30,
          fontFamily: "SofiaPro_500Medium",
        },

        "3xl": {
          fontSize: 36,
          fontFamily: "SofiaPro_600SemiBold",
        },
      },
    },

    defaultProps: {
      size: "md",
    },
  },
  {},
);
