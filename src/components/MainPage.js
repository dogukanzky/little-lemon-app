import React from "react";
import { Text, View, Image } from "react-native";
// import LemonHeader from "./src/components/LemonHeader";
// import LemonFooter from "./src/components/LemonFooter";
import WelcomeScreen from "./WelcomePage";
import MenuScreen from "./MenuPage";
import InformationScreen from "./InformationPage";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function MainPage(props) {
  return (
    <View className="flex-1">
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Welcome") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Menu") {
              iconName = focused ? "fast-food" : "fast-food-outline";
            } else if (route.name === "InformationPage") {
              iconName = focused
                ? "information-circle"
                : "information-circle-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveBackgroundColor: "#dacd10",
          tabBarInactiveBackgroundColor: "#495E57"
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
        <Tab.Screen name="InformationPage" component={InformationScreen} />
      </Tab.Navigator>
    </View>
  );
}
