import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { PropsWithChildren, useEffect } from "react";
import Constants from "expo-constants";
import "react-native-reanimated";

import { GluestackUIProvider } from "@gluestack-ui/themed";
import { extendedThemeConfig } from "@/theme/gluestack-ui.config";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function Wrapper({ children }: PropsWithChildren) {
  const [loaded] = useFonts({
    SofiaPro: require("../assets/fonts/Sofia-Pro-Regular-Az.otf"),
    SofiaPro_400Regular: require("../assets/fonts/Sofia-Pro-Regular-Az.otf"),
    SofiaPro_500Medium: require("../assets/fonts/Sofia-Pro-Medium-Az.otf"),
    SofiaPro_700Bold: require("../assets/fonts/Sofia-Pro-Bold-Az.otf"),
    SofiaPro_600SemiBold: require("../assets/fonts/Sofia-Pro-Semi-Bold-Az.otf"),
    SofiaPro_900Black: require("../assets/fonts/Sofia-Pro-Black-Az.otf"),
    SofiaPro_300Light: require("../assets/fonts/Sofia-Pro-Light-Az.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GluestackUIProvider config={extendedThemeConfig}>
      {children}
    </GluestackUIProvider>
  );
}

const AppContent = () => {
  return <Stack />;
};

// Default to rendering your app
let AppEntryPoint = () => (
  <Wrapper>
    <AppContent />
  </Wrapper>
);

// Render Storybook if storybookEnabled is true
if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  const Storybook = require("../.storybook").default;
  const StoryApp = () => (
    <Wrapper>
      <Storybook />
    </Wrapper>
  );
  AppEntryPoint = StoryApp;
}

export default AppEntryPoint;
