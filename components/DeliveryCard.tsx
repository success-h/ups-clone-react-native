import { Divider, Icon } from "@rneui/themed";
import { Button, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

interface DeliveryCardProps {
  order: Order;
  fullWidth?: boolean;
}

export const DeliveryCard = ({ order, fullWidth }: DeliveryCardProps) => {
  return (
    <View
      className={`${
        fullWidth
          ? "h-screen rounded-none mx-0 px-0 bg-rose-400"
          : " mx-4 my-2 p-4 rounded-lg bg-[#5cc0c8] shadow-md"
      } `}
    >
      <View className={`${fullWidth ? "py-10" : ""}`}>
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
        <View className={`${fullWidth ? "" : "mx-auto"}`}>
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
            className={`${
              fullWidth
                ? "py-2 flex-row px-2 justify-between items-center"
                : "flex-row px-2 justify-between items-center"
            }`}
            key={item.item_id}
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
        className={`${fullWidth ? " flex-1" : "w-full h-[200px]"}`}
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
