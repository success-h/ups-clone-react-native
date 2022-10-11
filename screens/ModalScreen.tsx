import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon } from "@rneui/themed";
import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DeliveryCard } from "../components/DeliveryCard";
import { useCustomerOrders } from "../hooks/useCustomerOrders";
import { RootStackParamList } from "../navigator/RootNavigator";
import { TabNavParamList } from "../navigator/TabNavigator";

type ModalScreenRouteProps = RouteProp<RootStackParamList, "Modal">;

export type ModalScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavParamList, "Modal">,
  NativeStackNavigationProp<RootStackParamList>
>;

export const ModalScreen = ({}) => {
  const navigation = useNavigation<ModalScreenNavigationProps>();

  const {
    params: { name, userId },
  } = useRoute<ModalScreenRouteProps>();
  const { loading, error, orders } = useCustomerOrders(userId);
  console.log(orders);
  return (
    <View>
      <TouchableOpacity
        onPress={navigation.goBack}
        className="absolute right-5 top-5 z-10"
      >
        <Icon name="closecircleo" type="antdesign" />
      </TouchableOpacity>
      <View className="mt-[10px]">
        <View className="py-5 border-b border-[#ddd]">
          <Text className="text-center text-[#5cc0c8] font-bold text-xl">
            {name}
          </Text>
          <Text className="text-center  italic text-sx">deliveries</Text>
        </View>
      </View>
      <FlatList
        className="h-screen"
        contentContainerStyle={{ paddingBottom: 200 }}
        keyExtractor={(order) => order.trackingId}
        data={orders}
        renderItem={({ item: order }) => <DeliveryCard order={order} />}
      />
    </View>
  );
};
