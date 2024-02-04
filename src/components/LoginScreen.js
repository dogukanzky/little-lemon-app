import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Platform,
  View,
  TextInput,
  Alert,
  Pressable
} from "react-native";
import { useState } from "react";

export default function LoginScreen({ navigation }) {
  const INITAL_USER = { username: "", password: "" };
  const [user, setUser] = useState(INITAL_USER);
  const [login, setLogin] = useState(false);
  const handleUserNameChange = username => {
    setUser({ ...user, username });
  };
  const handlePassChange = password => {
    setUser({ ...user, password });
  };
  return (
    <KeyboardAvoidingView
      className="flex-1 bg-[#495E57]"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView class="h-full w-full">
        <Text className="text-white text-2xl ml-auto mr-auto">
          Welcome to Little Lemon
        </Text>

        <>
          <Text className="text-white text-2xl ml-auto mr-auto py-5">
            Login to continue
          </Text>

          <TextInput
            className="w-3/5 h-10 border-2 border-gray-600 bg-yellow-50 rounded-md text-2xl sm:text-2xl  ml-auto mr-auto mt-5 mb-5"
            onChangeText={handleUserNameChange}
            value={user.username}
            placeholder="Enter your email"
            keyboardType="email-address"
            onFocus={() => Alert.alert("email focused")}
            onBlur={() => Alert.alert("email unfocused")}
            clearButtonMode="always"
          />
          <TextInput
            className="w-3/5 h-10 border-2 border-gray-600 bg-yellow-50 rounded-md text-2xl sm:text-2xl ml-auto mr-auto mt-14 mb-5"
            onChangeText={handlePassChange}
            value={user.password}
            placeholder="Enter your password"
            secureTextEntry
            clearButtonMode="always"
          />
          <Pressable
            className="w-2/5 sm:w-1/5 h-10 bg-[#dacd10] rounded-3xl ml-auto mr-auto mt-5 mb-5 "
            onPress={() => {
              Alert.alert("Login button pressed");
              setLogin(!login);
              navigation.navigate("MainPage");
            }}
          >
            <Text className="text-white text-2xl sm:text-3xl text-center">
              Login
            </Text>
          </Pressable>
        </>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
