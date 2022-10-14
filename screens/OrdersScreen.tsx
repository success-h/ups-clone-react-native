import { useQuery } from "@apollo/client";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import OrdersCard from "../components/OrderCard";
import { GET_ORDERS } from "../graphql/Queries";
import { useOrders } from "../hooks/useOrders";
import { RootStackParamList } from "../navigator/RootNavigator";
import { TabNavParamList } from "../navigator/TabNavigator";

// type OrderScreenRouteProps = RouteProp<RootStackParamList, "OrderScreen">;

export type OrderScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

export const OrdersScreen = ({}) => {
  const [input, setInput] = useState<string>("");
  const navigation = useNavigation<OrderScreenNavigationProps>();
  const [ascending, setAscending] = useState<boolean>(false);
  const { loading, error, orders } = useOrders();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({ focused, color }) => (
        <Text
          className={`${focused ? "text-rose-400" : "text-xs text-gray-400"}`}
        >
          Orders
        </Text>
      ),
    });
  }, []);

  return (
    <ScrollView>
      <Image
        source={{ uri: "https://links.papareact.com/m51" }}
        className="w-full h-64"
        onLoadStart={() => <ActivityIndicator />}
      />

      <View>
        <TouchableOpacity
          onPress={() => setAscending(!ascending)}
          className="bg-gray-100 py-3 m-4 shadow-lg"
        >
          <Text className="text-center font-medium text-md">
            {ascending ? "Showing: Oldest First" : "Showing: Newest First"}
          </Text>
        </TouchableOpacity>
      </View>
      {orders
        ?.sort((a, b) => {
          if (ascending) {
            return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
          } else {
            return new Date(a.createdAt) < new Date(b.createdAt) ? -1 : 1;
          }
        })
        .map((order) => (
          <OrdersCard key={order.trackingId} item={order} />
        ))}
    </ScrollView>
  );
};
