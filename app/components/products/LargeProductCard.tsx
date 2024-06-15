import { VStack, Image, Badge, Box, StarIcon } from "@gluestack-ui/themed";
import React from "react";
import { Text } from "../core/Text";
import FavoriteIcon from "./FavoriteIcon";
import LargeStar from "../star/LargeStar";

interface LargeProductCardProps {
  title: string;
  image: string;
  price: string;
  starAverage: number;
  starNumber: number;
  subtitle: string;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
}

const LargeProductCard = ({
  title,
  image,
  price,
  starAverage,
  starNumber,
  subtitle,
  isFavorite,
  onFavoriteToggle,
}: LargeProductCardProps) => {
  return (
    <Box
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
          alt={title}
          height={136}
          minWidth="100%"
          borderRadius={15}
        />

        <Box position="absolute" top="$3" left="$3">
          <Badge
            bgColor="$white"
            px="$3"
            py="$1"
            rounded="$full"
            variant="solid"
          >
            <Text color="$primary" size="lg">
              $<Text size="lg">{price}</Text>
            </Text>
          </Badge>
        </Box>

        <Box position="absolute" top="$3" right="$3">
          <FavoriteIcon isActive={isFavorite} onPress={onFavoriteToggle} />
        </Box>
      </VStack>

      <Box>
        <LargeStar
          left="$3"
          top="-$4"
          position="absolute"
          starAverage={starAverage}
          starNumber={starNumber}
        />
      </Box>

      <VStack pt="$10" pb="$4" px="$6">
        <Text color="$black" size="lg">
          {title}
        </Text>

        <Text color="$dark50" size="sm">
          {subtitle}
        </Text>
      </VStack>
    </Box>
  );
};

export default LargeProductCard;
