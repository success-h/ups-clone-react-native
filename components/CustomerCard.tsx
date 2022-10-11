import { Text, View } from "react-native";
import { useCustomerOrders } from "../hooks/useCustomerOrders";

interface CustomerCardProps {
  name: string;
  email: string;
  userId: string;
}

export const CustomerCard = ({ name, email, userId }: CustomerCardProps) => {
  console.log({ name, email, userId });
  const { loading, error, orders } = useCustomerOrders(userId);
  console.log(orders);
  return (
    <View>
      <Text>Hello Customer</Text>
    </View>
  );
};
