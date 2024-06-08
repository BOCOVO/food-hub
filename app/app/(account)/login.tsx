/* eslint-disable react/no-unescaped-entities */
import { Box } from "@gluestack-ui/themed";
import { Text } from "@/components/core/Text";
import { Link } from "@/components/core/Link";
import LoginForm from "@/components/forms/LoginForm";

const Login = () => {
  return (
    <Box pt="$40">
      <Text size="3xl" color="$black">
        Login
      </Text>

      <LoginForm />

      <Box mt="$16">
        <Text fontSize={14} textAlign="center">
          Don't have an account?{" "}
          <Link theme="primary" color="$primary" href="/register">
            Sign up
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Login;
