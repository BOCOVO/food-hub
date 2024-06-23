import { Image } from "@gluestack-ui/themed";
import { VStack } from "@gluestack-ui/themed";
import { Box } from "@gluestack-ui/themed";
import LargeStar from "@/components/star/LargeStar";
import FavoriteIcon from "@/components/products/FavoriteIcon";
import { Text } from "@/components/core/Text";
import CardKeyWord from "./CardKeyWord";
import { HStack } from "@gluestack-ui/themed";
import Delivery from "@/components/icons/Delivery";
import TimerIcon from "@/components/icons/Timer";

interface RestaurantCardProps {
  image: string;
  isFavorite?: boolean;
  name: string;
  onFavoriteToggle?: () => void;
  keyWords: string[];
  deliveryType?: string;
  deliveryTime?: string;
}

const RestaurantCard = ({
  image,
  isFavorite,
  onFavoriteToggle,
  name,
  keyWords,
  deliveryTime = "10-15 mins",
  deliveryType = "Free delivery",
}: RestaurantCardProps) => {
  return (
    <Box
      bgColor="$white"
      borderRadius={15}
      bg="$white"
      shadowColor="$inputShadow"
      shadowOffset={{ height: 18, width: 18 }}
      shadowRadius={40}
      elevation={40}
      shadowOpacity={0.25}
    >
      <VStack gap={2}>
        <Image
          source={{
            uri: image,
          }}
          height={136}
          minWidth="100%"
          borderTopLeftRadius={15}
          borderTopRightRadius={15}
        />

        <LargeStar
          position="absolute"
          top="$3"
          left="$3"
          starAverage={4}
          starNumber={209}
        />

        <Box position="absolute" top="$3" right="$3">
          <FavoriteIcon isActive={isFavorite} onPress={onFavoriteToggle} />
        </Box>
      </VStack>

      <VStack p="$5" gap="$2">
        <Text color="$black" size="lg">
          {name}
        </Text>

        <HStack gap="$2">
          <HStack gap="$1">
            <Delivery />

            <Text color="$grayAn5" size="md">
              {deliveryType}
            </Text>
          </HStack>

          <HStack gap="$1">
            <TimerIcon />

            <Text color="$grayAn5" size="md">
              {deliveryTime}
            </Text>
          </HStack>
        </HStack>

        <HStack gap="$2">
          {keyWords.map((keyword) => (
            <CardKeyWord key={keyword} label={keyword} />
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default RestaurantCard;
