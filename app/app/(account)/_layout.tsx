import EllipseShapeStyledWrapper from "@/components/layouts/EllipseShapeStyledWrapper";
import { SafeAreaView } from "@gluestack-ui/themed";
import { Slot } from "expo-router";

const Layout = () => {
  return (
    <SafeAreaView backgroundColor="$white" flex={1}>
      <EllipseShapeStyledWrapper>
        <Slot />
      </EllipseShapeStyledWrapper>
    </SafeAreaView>
  );
};

export default Layout;
