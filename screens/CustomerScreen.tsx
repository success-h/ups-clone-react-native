import { gql, useQuery } from "@apollo/client";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon, Input } from "@rneui/themed";
import React, { useLayoutEffect, createRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { CustomerCard } from "../components/CustomerCard";
import { GET_CUSTOMERS, GET_ORDERS } from "../graphql/Queries";
import { RootStackParamList } from "../navigator/RootNavigator";
import { TabNavParamList } from "../navigator/TabNavigator";

export type CustomerScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

export const CustomerScreen = () => {
  const [input, setInput] = useState<string>("");
  const navigation = useNavigation<CustomerScreenNavigationProps>();

  const { loading, error, data } = useQuery(GET_CUSTOMERS);
  // console.log("data", data);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <ScrollView>
        <Image
          source={{
            uri: "https://res.cloudinary.com/dp3a4be7p/image/upload/v1666453326/media/undraw_takeout_boxes_ap54_pwtxdl.png",
          }}
          className="w-full h-64"
          onLoadStart={() => <ActivityIndicator />}
        />
        <View className="mx-5 rounded-lg px-6 bg-white backdrop-blur-lg bg-opacity-95 border border-gray-500  items-center flex-row">
          <Icon name="search" type="feather" color="#555757" />
          <TextInput
            placeholder="Search by customer"
            value={input}
            onChangeText={setInput}
            className="text-[#5a5a5a] ml-4 w-72 py-4"
          />
        </View>

        {data?.getCustomers
          ?.filter((customer: CustomerList) =>
            customer.value.name.includes(input)
          )
          .map(({ name: ID, value: { email, name } }: CustomerResponse) => (
            <CustomerCard userId={ID} key={ID} email={email} name={name} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};
