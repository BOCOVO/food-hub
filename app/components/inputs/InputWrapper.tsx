import {
  AlertCircleIcon,
  Box,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from "@gluestack-ui/themed";

import { Text } from "@/components/core/Text";

export interface InputWrapperProps {
  help?: string;
  error?: string;
  label: string;
  children?: React.ReactNode;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

const InputWrapper = ({
  children,
  error,
  help,
  isDisabled,
  isReadOnly,
  isRequired,
  label,
}: InputWrapperProps) => {
  return (
    <Box h="$32" w="$72">
      <FormControl
        size="md"
        isDisabled={isDisabled}
        isInvalid={!!error}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
      >
        <FormControlLabel mb="$3">
          <FormControlLabelText>
            <Text color="$gray" size="sm">
              {label}
            </Text>
          </FormControlLabelText>
        </FormControlLabel>

        {children}

        {help && !error ? (
          <FormControlHelper mt="$3">
            <FormControlHelperText>{help}</FormControlHelperText>
          </FormControlHelper>
        ) : null}

        {error ? (
          <FormControlError mt="$3">
            <FormControlErrorIcon as={AlertCircleIcon} />

            <FormControlErrorText>{error}</FormControlErrorText>
          </FormControlError>
        ) : null}
      </FormControl>
    </Box>
  );
};

export default InputWrapper;
