import { config } from "@gluestack-ui/config";
import merge from "lodash/merge";

const custom = {
  tokens: {
    colors: {
      primary: "#FE724C",
      primary80: "#FE8160",
      primary50: "#FEA58D",
      primary20: "#FED2C7",

      secondary: "#FFC529",
      secondary80: "#FFD050",
      secondary50: "#FFDF8B",
      secondary20: "#FFEFC3",

      dark: "#1A1D26",
      dark80: "#2A2F3D",
      dark50: "#4D5364",
      dark20: "#6E7489",

      gray: "#9A9FAE",
      gray80: "#A8ACB9",
      gray50: "#C4C7D0",
      gray20: "#EBEBEB",
    },
  },
};

export const extendedThemeConfig = merge(config, custom);
