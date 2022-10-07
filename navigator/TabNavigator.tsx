import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { CustomerScreen } from "../screens/CustomerScreen";
import { Icon } from "@rneui/themed";
import { OrderScreen } from "../screens/OrderScreen";

interface TabNavigatorProps {}
interface TabParamListProps {
  Customer: undefined;
  Order: undefined;
}

export type TabNavParamList = {
  Customers: undefined;
  Orders: undefined;
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
        tabBarActiveTintColor: "#4b9ad6",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Customers") {
            return (
              <Icon
                name="users"
                type="feather"
                color={focused ? "#479fd6" : "#dddddd"}
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
      <Tab.Screen name="Orders" component={OrderScreen} />
    </Tab.Navigator>
  );
}
