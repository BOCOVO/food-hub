import { View } from "@gluestack-ui/themed";
import { Text } from "../core/Text";

interface CardKeyWordProps {
  label: string;
}
const CardKeyWord = ({ label }: CardKeyWordProps) => {
  return (
    <View backgroundColor="$grayAn3" borderRadius={5} px="$2" py="$1.5">
      <Text size="sm" color="$grayAn4" fontSize={12} textTransform="uppercase">
        {label}
      </Text>
    </View>
  );
};

export default CardKeyWord;
