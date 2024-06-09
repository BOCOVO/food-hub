import { HStack } from "@gluestack-ui/themed";
import IconButton from "../buttons/IconButton";
import { MenuIcon } from "@gluestack-ui/themed";
import DeliveryAddressPlaceholder from "./DeliveryAddressPlaceholder";
import Avatar from "../avatar/Avatar";

const HomeHeader = () => {
  return (
    <HStack justifyContent="space-between" alignItems="center">
      <IconButton onPress={() => {}} icon={MenuIcon} />

      <DeliveryAddressPlaceholder />

      <Avatar h={38} w={38} rounded={12} />
    </HStack>
  );
};

export default HomeHeader;
