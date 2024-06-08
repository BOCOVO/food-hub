import { QueryClient } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { MedusaProvider as CoreMedusaProvider } from "medusa-react";

const queryClient = new QueryClient();

const MedusaProvider = ({ children }: PropsWithChildren) => {
  return (
    <CoreMedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl={process.env.EXPO_PUBLIC_STORE_BACKEND_URL!}
    >
      {children}
    </CoreMedusaProvider>
  );
};

export default MedusaProvider;
