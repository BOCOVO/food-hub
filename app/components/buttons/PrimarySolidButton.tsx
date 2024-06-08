import { Box, Button, ButtonText } from "@gluestack-ui/themed";
import { ComponentProps, ReactNode } from "react";
import { Text } from "../core/Text";

interface PrimarySolidButtonProps extends ComponentProps<typeof Button> {
  label: string;
  icon?: ReactNode;
}

const PrimarySolidButton = ({
  icon,
  label,
  ...restOptions
}: PrimarySolidButtonProps) => {
  return (
    <Button
      rounded="$full"
      minHeight={60}
      backgroundColor="$primary"
      $active-backgroundColor="$primary50"
      size="md"
      shadowColor="$primary"
      shadowOffset={{ width: 0, height: 10 }}
      shadowOpacity={0.26}
      shadowRadius={40}
      style={{ elevation: 40 }}
      justifyContent={icon ? "flex-start" : "center"}
      px={10}
      {...restOptions}
    >
      {icon ? (
        <Box
          alignItems="center"
          justifyContent="center"
          rounded="$full"
          backgroundColor="$white"
          width={40}
          height={40}
        >
          {icon}
        </Box>
      ) : null}

      <ButtonText textAlign="center" flex={1}>
        <Text color="$white" textTransform="uppercase" size="md">
          {label}
        </Text>
      </ButtonText>
    </Button>
  );
};

export default PrimarySolidButton;
