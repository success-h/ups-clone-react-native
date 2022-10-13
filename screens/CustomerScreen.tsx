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
  console.log("data", data);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView className="bg-[#5cc0c8]">
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        className="w-full h-64"
        onLoadStart={() => <ActivityIndicator />}
      />
      <View className="mx-5 rounded-md px-6 bg-white items-center flex-row">
        <Icon name="search" type="feather" color="#555757" />
        <TextInput
          placeholder="Search by customer"
          value={input}
          onChangeText={setInput}
          className="text-[#5cc0c8] ml-4 w-72 py-4"
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
  );
};
