import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { RootStackParamList } from "../navigator/RootNavigator";
import { TabNavParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { DeliveryCard } from "../components/DeliveryCard";

export type OrderScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

type OrderScreenRouteProps = RouteProp<RootStackParamList, "Order">;

const OrderScreen = () => {
  const navigation = useNavigation<OrderScreenNavigationProps>();
  const {
    params: { order },
  } = useRoute<OrderScreenRouteProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: order.trackingItems.customer.name,
      headerTintColor: "#eb34c0",
      headerTitleStyle: { color: "black" },
      headerBackTitle: "deliveries",
    });
  }, [order]);
  return (
    <View className="-mt-2">
      <DeliveryCard order={order} fullWidth />
    </View>
  );
};

export default OrderScreen;
