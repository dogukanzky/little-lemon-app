import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import LemonHeader from "./src/components/LemonHeader";
import LemonFooter from "./src/components/LemonFooter";
import WelcomeScreen from "./src/components/WelcomeScreen";
import LoginScreen from "./src/components/LoginScreen";
import MainPage from "./src/components/MainPage";

export default function App() {
  return (
    <View className="bg-white flex-1 ">
      <LemonHeader />
      <MainPage />
      {/* <WelcomeScreen />
      <LoginScreen /> */}
      <LemonFooter />
      <StatusBar style="auto" />
    </View>
  );
}
