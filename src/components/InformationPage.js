import { useEffect } from "react";
import {
  View,
  SectionList,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  Text,
  useColorScheme,
  useWindowDimensions,
  Pressable
} from "react-native";

export default function InformationPage({ navigation }) {
  const colorScheme = useColorScheme();
  const { width, height, fontScale } = useWindowDimensions();
  const phoneOrTablet = width < 768 ? true : false;

  useEffect(() => {
    console.log("colorScheme", colorScheme);
  }, [colorScheme]);
  const bg = colorScheme === "dark" ? "#495E57" : "#EE9972";
  console.log("bg", bg);
  return (
    <ScrollView className={`flex-1 bg-[#4b4b4b]`}>
      <View className="flex-row mt-6 ml-9 justify-center">
        <Image
          className={`h-32 w-32`}
          resizeMode="contain"
          source={require("../img/lemonLogo.png")}
          accessible={true}
          accessibilityLabel="Little Lemon Logo"
        ></Image>
        <Text className="text-white sm:text-5xl text-3xl pt-8">
          Little Lemon
        </Text>
      </View>
      <Text>Theme:{colorScheme}</Text>
      <Text>Width:{width}</Text>
      <Text>Height:{height}</Text>
      <Text>Font:{fontScale}</Text>
      <Text className=" text-white text-2xl sm:text-2xl ml-auto mr-auto py-5 px-5 text-center">
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <View className="flex justify-center items-center">
        <Pressable
          onPress={() => {
            navigation.popToTop();
          }}
          className="w-1/3 sm:w-1/3 h-10 bg-[#dacd10] rounded-3xl justify-center items-center "
        >
          <Text className="text-white text-center text-2xl "> Log Out!</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
