import { Button, ButtonIcon, ChevronLeftIcon } from "@gluestack-ui/themed";
import { ComponentType } from "react";

interface IconButtonProps {
  onPress: () => void;
  icon: ComponentType;
}

const IconButton = ({ onPress, icon }: IconButtonProps) => {
  return (
    <Button
      width={38}
      height={38}
      rounded={12}
      backgroundColor="$white"
      shadowOpacity={0.3}
      shadowOffset={{ width: 5, height: 10 }}
      shadowColor="$inputShadow"
      style={{ elevation: 20 }}
      onPress={onPress}
    >
      <ButtonIcon color="$dark" size="xl" as={icon} />
    </Button>
  );
};

export default IconButton;
