import { Box, Icon, Pressable, VStack } from "@gluestack-ui/themed";
import { HeatIcon } from "../icons/HeartIcon";

const activeColor = "$white";
const inactiveColor = "$gray20";

const activeBg = "$primary";
const inactiveBg = "$white";

interface FavoriteIconProps {
  isActive?: boolean;
  onPress?: () => void;
}

const FavoriteIcon = ({ isActive, onPress }: FavoriteIconProps) => {
  const currentColor = isActive ? activeColor : inactiveColor;
  const currentBg = isActive ? activeBg : inactiveBg;
  const currentShadow = isActive ? activeBg : "$gray20";

  const invertedColor = isActive ? inactiveColor : activeColor;
  const invertedBg = isActive ? inactiveBg : activeBg;

  return (
    <Pressable
      w={34}
      h={34}
      p={9}
      rounded="$full"
      shadowOffset={{ width: 0, height: 10 }}
      shadowRadius={20}
      elevation={30}
      $active-shadowColor={invertedBg}
      backgroundColor={currentBg}
      $active-backgroundColor={invertedBg}
      shadowColor={currentShadow}
      shadowOpacity={0.25}
      onPress={onPress}
    >
      {
        /* @ts-ignore */
        ({ pressed }) => (
          <Icon
            color={pressed ? invertedColor : currentColor}
            as={HeatIcon}
            w={20}
            h={20}
          />
        )
      }
    </Pressable>
  );
};

export default FavoriteIcon;
