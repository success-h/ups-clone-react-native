import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon } from "@rneui/themed";
import React, { useLayoutEffect, createRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { RootStackParamList } from "../navigator/RootNavigator";
import { TabNavParamList } from "../navigator/TabNavigator";

export type CustomerScreenNavProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

export const CustomerScreen = () => {
  const navigation = useNavigation<CustomerScreenNavProps>();
  const [input, setInput] = useState<string>("");

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
      <View className="mx-7 rounded-md  px-6 py-4 bg-white items-center flex-row">
        <Icon name="search" type="feather" color="#555757" />
        <TextInput
          placeholder="Search by customer"
          value={input}
          onChangeText={setInput}
          className="text-[#555757] ml-4"
        />
      </View>
    </ScrollView>
  );
};
