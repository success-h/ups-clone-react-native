import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ModalScreen } from "../screens/ModalScreen";
import OrderScreen from "../screens/OrderScreen";
import TabNavigator from "./TabNavigator";

interface RootNavigatorProps {}

export type RootStackParamList = {
  Main: undefined;
  Modal: { userId: string; name: string };
  Order: { order: Order };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator({}: RootNavigatorProps) {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Group>

      {/* Modal and order screen below */}

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
      <Stack.Group>
        <Stack.Screen name="Order" children={OrderScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
