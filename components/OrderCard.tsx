import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon } from "@rneui/themed";
import { View, Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../navigator/RootNavigator";
import { TabNavParamList } from "../navigator/TabNavigator";

interface Props {
  item: Order;
}
export type OrdersScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

export default function OrdersCard({ item }: Props) {
  const navigation = useNavigation<OrdersScreenNavigationProps>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Order", { order: item })}
      className="bg-white mx-4 my-2 flex-row justify-between items-center rounded-lg px-4 py-3"
    >
      <View className="items-start">
        <Icon name="truck-delivery" color="#ED647C" type="material-community" />
        <Text
          style={{ fontSize: 10 }}
          children={new Date(item.createdAt).toDateString()}
        />
      </View>
      <View className="items-center">
        <Text className="text-xs text-gray-400">
          {item.carrier} - {item.trackingId}
        </Text>
        <Text className="text-[15px] text-gray-500">
          {item.trackingItems.customer.name}
        </Text>
      </View>
      <View className="flex-row items-center gap-2">
        <Text className="text-xs text-rose-400">
          {item.trackingItems.items.length} x
        </Text>
        <Icon name="box" type="feather" />
      </View>
    </TouchableOpacity>
  );
}
