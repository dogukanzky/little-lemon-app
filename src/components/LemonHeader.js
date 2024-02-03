import { Text, View } from "react-native";

export default function LemonHeader() {
  return (
    <View className="bg-[#EE9972] flex-[0.05]  justify-center items-center">
      <Text
        className="font-extrabold py-7 text-2xl text-[#495E57]"
        numberOfLines={1}
      >
        Lemon Header
      </Text>
    </View>
  );
}
