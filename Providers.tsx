import { SafeAreaView } from "react-native";

interface ProvidersProps {}

export default function Providers({}: ProvidersProps) {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
