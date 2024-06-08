import { Colors } from "@/constants/colors";
import { config } from "@gluestack-ui/config";
import merge from "lodash/merge";

const custom = {
  tokens: {
    colors: Colors,
    fonts: {
      heading: "SofiaPro",
      body: "SofiaPro",
      mono: "SofiaPro",
    },
  },
  globalStyle: {
    fontFamily: "SofiaPro",
  },
};

export const extendedThemeConfig = merge(config, custom);
