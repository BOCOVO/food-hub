import { Badge, StarIcon } from "@gluestack-ui/themed";
import { Text } from "../core/Text";
import { ComponentProps } from "react";

interface LargeStarProps extends ComponentProps<typeof Badge> {
  starAverage: number;
  starNumber: number;
}

const LargeStar = ({
  starAverage,
  starNumber,
  ...badgeProps
}: LargeStarProps) => {
  const roundedStarCount = Math.floor(starNumber / 5) * 5;

  return (
    <Badge
      bgColor="$white"
      px="$3"
      left="$3"
      py="$1"
      rounded="$full"
      shadowColor="$inputShadow"
      shadowOffset={{ height: 10, width: 5 }}
      shadowRadius={20}
      elevation={20}
      shadowOpacity={0.3}
      gap="$1"
      top="-$4"
      position="absolute"
      {...badgeProps}
    >
      <Text color="$black" size="lg">
        {starAverage}
      </Text>

      <StarIcon width={10} height={10} fill="$yellow" />

      <Text color="$gray" size="xs">
        ( {roundedStarCount}+ )
      </Text>
    </Badge>
  );
};

export default LargeStar;
