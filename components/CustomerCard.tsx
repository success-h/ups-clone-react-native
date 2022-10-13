import { useNavigation } from "@react-navigation/native";
import { Card, Icon } from "@rneui/themed";
import { Text, TouchableOpacity, View } from "react-native";
import { useCustomerOrders } from "../hooks/useCustomerOrders";
import { CustomerScreenNavigationProps } from "../screens/CustomerScreen";

interface CustomerCardProps {
  name: string;
  email: string;
  userId: string;
}

export const CustomerCard = ({ name, email, userId }: CustomerCardProps) => {
  console.log({ name, email, userId });
  const { loading, error, orders } = useCustomerOrders(userId);

  const navigation = useNavigation<CustomerScreenNavigationProps>();
  return (
    <TouchableOpacity
      className="mx-5 shadow-sm"
      onPress={() =>
        navigation.navigate("Modal", {
          name: name,
          userId: userId,
        })
      }
    >
      <View className="bg-white rounded-md my-3 p-7">
        <View className="flex-row mb-2 items-start justify-between">
          <View>
            <Text className="text-2xl font-semibold">{name}</Text>
            <Text className="text-[#5cc0c8]">ID: {userId}</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="mt-6 font-bold text-[#5cc0c8]">
              {loading ? "Loading..." : `${orders.length} x`}
            </Text>
            <Icon name="box" type="entypo" color="#5cc0c8" size={50} />
          </View>
        </View>
        <Card.Divider />
        <View>
          <Text>{email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
