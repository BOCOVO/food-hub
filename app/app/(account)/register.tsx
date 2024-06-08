import { Box } from "@gluestack-ui/themed";
import { Text } from "@/components/core/Text";
import { Link } from "@/components/core/Link";
import RegisterForm from "@/components/forms/RegisterForm";

const Register = () => {
  return (
    <Box pt="$20">
      <Text size="3xl" color="$black">
        Sign Up
      </Text>

      <RegisterForm />

      <Box mt="$16">
        <Text fontSize={14} textAlign="center">
          Already have an account?{" "}
          <Link theme="primary" color="$primary" href="/login">
            Login
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Register;
