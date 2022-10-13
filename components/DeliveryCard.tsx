import { Divider, Icon } from "@rneui/themed";
import { Button, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

interface DeliveryCardProps {
  order: Order;
}

export const DeliveryCard = ({ order }: DeliveryCardProps) => {
  console.log("order:", order);
  return (
    <View className="bg-[#5cc0c8] shadow-md mx-4 my-2 p-4 rounded-lg">
      <View>
        <Icon name="box" type="entypo" color="white" size={40} />
        <View>
          <Text className="text-xs text-center uppercase font-bold text-white">
            {order.carrier} - {order.trackingId}
          </Text>
          <Text className="text-lg mb-2 mt-2 text-center uppercase font-bold text-white">
            Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}
          </Text>
          <Divider color="white" />
        </View>
        <View className="mx-auto">
          <Text className="text-center text-white font-bold mt-5">Address</Text>

          <Text className="text-sm text-white text-center">
            {order.Address}, {order.City}
          </Text>
          <Text className="text-sm text-white italic text-center">
            Shipping Cost: ${order.shippingCost}
          </Text>
        </View>
      </View>

      <Divider color="white" />

      {order.trackingItems.items.map((item) => {
        console.log({ item });
        return (
          <View
            key={item.item_id}
            className="flex-row px-2 justify-between items-center"
          >
            <Text className="text-xs text-white italic">{item.name}</Text>
            <Text className="text-white text-xl">{item.quantity}</Text>
          </View>
        );
      })}

      <MapView
        initialRegion={{
          latitude: order.Lat,
          longitude: order.Lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="w-full h-[200px]"
      >
        {order.Lat && order.Lng && (
          <Marker
            coordinate={{
              latitude: order.Lat,
              longitude: order.Lng,
            }}
            title="Delivery Location"
            description={order.Address}
            identifier="destination"
          />
        )}
      </MapView>
    </View>
  );
};
