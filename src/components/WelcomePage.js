import { useState, useRef } from "react";
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function WelcomeScreen() {
  const INITAL_FORM = { name: "", surname: "", message: "", phoneNum: "" };

  const [form, setForm] = useState(INITAL_FORM);

  const handleFormChange = (key, input) => {
    setForm({ ...form, [key]: input });
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-[#4b4b4b]"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 120 : 20}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView className="w-full h-full">
          <Text className="text-3xl sm:text-6xl font-extrabold text-center">
            Welcome to Little Lemon
          </Text>
          <Text className="font-light text-xl text-yellow-400 text-center">
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. We
            would love to hear more about your experience with us!
          </Text>
          <Text className="text-center text-xl text-red-50">
            How was your experience with us? Please let us know by filling out
            the form.
          </Text>
          <TextInput
            className="w-3/5 h-10 border-2 border-gray-600 bg-[#fff895]  rounded-md text-xl ml-auto mr-auto mt-5 mb-5"
            onChangeText={e => handleFormChange("name", e)}
            value={form.name}
            placeholder="Enter your name"
          />
          <TextInput
            className="w-3/5 h-10 border-2 border-gray-600 bg-[#fff895]   rounded-md text-xl ml-auto mr-auto mt-5 mb-5"
            onChangeText={e => handleFormChange("surname", e)}
            value={form.surname}
            placeholder="Enter your surname"
          />
          <TextInput
            className="w-3/5 h-10 border-2 border-gray-600 bg-[#fff895]  rounded-md text-xl ml-auto mr-auto mt-5 mb-5"
            onChangeText={e => handleFormChange("phoneNum", e)}
            value={form.phoneNum}
            placeholder="Phone Number"
            keyboardType={"phone-pad"}
          />
          <TextInput
            className="w-3/5 h-60 border-2 border-gray-600 bg-[#fff895]  rounded-md text-xl ml-auto mr-auto mt-5 mb-5"
            onChangeText={e => handleFormChange("message", e)}
            value={form.message}
            placeholder="Enter your message"
            multiline={true}
            maxLength={200}
          />
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
