import { Image, View } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

const Avatar = (props: Omit<ComponentProps<typeof Image>, "source">) => {
  return (
    <View
      shadowColor="$secondary"
      shadowRadius={16}
      shadowOffset={{ width: 0, height: 5 }}
      shadowOpacity={0.3}
      elevation={16}
    >
      <Image
        {...props}
        alt="avatar"
        source={require("@/assets/images/avatar.png")}
      />
    </View>
  );
};

export default Avatar;
