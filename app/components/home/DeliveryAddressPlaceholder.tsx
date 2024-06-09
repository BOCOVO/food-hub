import { ChevronDownIcon, Pressable, VStack } from "@gluestack-ui/themed";
import { Text } from "../core/Text";

const DeliveryAddressPlaceholder = () => {
  return (
    <Pressable>
      <VStack alignItems="center">
        <Text size="sm" color="$gray">
          Delery to <ChevronDownIcon color="$gray" />
        </Text>

        <Text size="md" color="$primary">
          4102 Pretty View Line
        </Text>
      </VStack>
    </Pressable>
  );
};

export default DeliveryAddressPlaceholder;
