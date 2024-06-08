import EllipseSmallToLeft from "@/components/icons/ellipses/EllipseSmallToLeft";
import EllipseSmallToRight from "@/components/icons/ellipses/EllipseSmallToRight";
import EllipseToBottom from "@/components/icons/ellipses/EllipseToBottom";
import { Box, ScrollView } from "@gluestack-ui/themed";
import { PropsWithChildren } from "react";

const EllipseShapeStyledWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Box flex={1}>
      <Box position="absolute" width="100%">
        <Box left={0} top={0}>
          <EllipseSmallToRight />
        </Box>

        <Box position="absolute" left={0} top={0}>
          <EllipseToBottom />
        </Box>

        <Box position="absolute" right={0} top={0}>
          <EllipseSmallToLeft />
        </Box>
      </Box>

      <ScrollView flex={1}>
        <Box mb="$20" padding={30} zIndex={2} flex={1}>
          {children}
        </Box>
      </ScrollView>
    </Box>
  );
};

export default EllipseShapeStyledWrapper;
