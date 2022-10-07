import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootNavigator />
    </NavigationContainer>
  );
}
