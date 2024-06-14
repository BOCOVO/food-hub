import { Pressable } from "@gluestack-ui/themed";
import { Image, VStack } from "@gluestack-ui/themed";
import { Text } from "../core/Text";
import { Box } from "@gluestack-ui/themed";

interface SmallCategoryCard {
  img: string;
  name: string;
  onPress?: () => void;
}

const SmallCategory = ({ img, name, onPress }: SmallCategoryCard) => {
  return (
    <Pressable
      backgroundColor="$white"
      width={60}
      $active-backgroundColor="$primary"
      onPress={onPress}
      borderRadius="$full"
      shadowOffset={{ width: 0, height: 20 }}
      shadowRadius={30}
      elevation={30}
      $active-shadowColor="$primary"
      shadowColor="$gray"
      shadowOpacity={0.25}
    >
      {
        /* @ts-ignore */
        ({ pressed }) => (
          <VStack alignItems="center" p={5} w="100%">
            <Box backgroundColor="$white" rounded="$full">
              <Image
                width={50}
                height={50}
                rounded="$full"
                objectFit="cover"
                source={{ uri: img }}
                alt={name}
              />
            </Box>

            <Text
              mb="$3"
              mt="$2"
              size="sm"
              fontSize={11}
              color={pressed ? "$white" : "$gray"}
            >
              {name}
            </Text>
          </VStack>
        )
      }
    </Pressable>
  );
};

export default SmallCategory;
