import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";

interface RootNavigatorProps {}

export type RootStackParamList = {
  Main: undefined;
  Modal: { userId: string; name: string };
  OrderScreen: { order: any };
};

const Stack = createNativeStackNavigator();

export default function RootNavigator({}: RootNavigatorProps) {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
