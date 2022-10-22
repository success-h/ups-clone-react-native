import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { CustomerScreen } from "../screens/CustomerScreen";
import { Icon } from "@rneui/themed";
import { OrdersScreen } from "../screens/OrdersScreen";

interface TabNavigatorProps {}

export type TabNavParamList = {
  Customers: undefined;
  Orders: undefined;
  Modal: {
    name: string;
    userId: string;
  };
};

const Tab = createBottomTabNavigator<TabNavParamList>();

export default function TabNavigator({}: TabNavigatorProps) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#5e33eced",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Customers") {
            return (
              <Icon
                name="users"
                type="feather"
                color={focused ? "#5e33eced" : "#dddddd"}
              />
            );
          } else if (route.name === "Orders") {
            return (
              <Icon
                name="box"
                type="feather"
                color={focused ? "#e81760" : "#dddddd"}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Customers" component={CustomerScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
}
