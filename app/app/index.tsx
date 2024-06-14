import { Text } from "@/components/core/Text";
import { Box } from "@gluestack-ui/themed";
import { Link } from "expo-router";

const Page = () => {
  return (
    <Box pl={20} pt={200}>
      <Text size="3xl">Welcome to</Text>
      <Text mb={50} size="3xl" color="$primary">
        Food-hub
      </Text>

      <Link href="register">
        <Text>Go to register</Text>
      </Link>
    </Box>
  );
};

export default Page;
