import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ModalScreen } from "../screens/ModalScreen";
import TabNavigator from "./TabNavigator";

interface RootNavigatorProps {}

export type RootStackParamList = {
  Main: undefined;
  Modal: { userId: string; name: string };
  OrderScreen: { order: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator({}: RootNavigatorProps) {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Group>

      {/* Modal */}

      <Stack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Modal"
          component={ModalScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
