import { Icon } from "@rneui/themed";
import { View, Text, TouchableOpacity } from "react-native";

interface Props {
  item: Order;
}

export default function OrdersCard({ item }: Props) {
  return (
    <TouchableOpacity>
      <View>
        <View>
          <Icon
            name="truck-delivery"
            color="#ED647C"
            type="material-community"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
