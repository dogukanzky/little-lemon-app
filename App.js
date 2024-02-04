import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Image } from "react-native";
import LemonHeader from "./src/components/LemonHeader";
import LemonFooter from "./src/components/LemonFooter";
import WelcomeScreen from "./src/components/MenuPage";
import LoginScreen from "./src/components/LoginScreen";
import InformationPage from "./src/components/InformationPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "./src/components/MainPage";

const Stack = createStackNavigator();

const TitleBackgroundImage = () => {
  return (
    <Image
      resizeMode="center"
      className="h-28 w-28 pb-10"
      source={require("./src/img/TitleLogo.png")}
    ></Image>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <View className="bg-white flex-1 ">
        {/* <LemonHeader /> */}
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#dacd10" },
            headerTitleAlign: "center",
            headerTitleStyle: { fontWeight: "bold" },
            headerTintColor: "#495E57",
            headerBackTitleVisible: false,
            headerBackTitle: false,
            gestureEnabled: false
          }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen
            options={
              ({ title: "Landing" },
              { headerTitle: props => <TitleBackgroundImage {...props} /> })
            }
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={
              ({ title: "Main Page" },
              { headerTitle: props => <TitleBackgroundImage {...props} /> })
            }
            name="MainPage"
            component={MainPage}
          />
        </Stack.Navigator>
        <LemonFooter />
      </View>
    </NavigationContainer>
  );
}

/* <StatusBar style="auto" /> */
