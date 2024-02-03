import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  SectionList,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
      { name: "Spinach Dip", price: "$6.50" },
      { name: "Stuffed Grape Leaves", price: "$7.00" },
      { name: "Cheese Platter", price: "$9.00" }
    ]
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
      { name: "Chicken Shawarma", price: "$12.00" },
      { name: "Beef Shawarma", price: "$13.00" },
      { name: "Grilled Chicken", price: "$12.50" },
      { name: "Steak Frites", price: "$16.00" }
    ]
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
      { name: "Grilled Vegetables", price: "$5.00" }
    ]
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
      { name: "Chocolate Cake", price: "$4.50" },
      { name: "Cheesecake", price: "$4.50" },
      { name: "Apple Pie", price: "$4.00" },
      { name: "Ice Cream Sundae", price: "$6.00" }
    ]
  }
];
function Item({ name, price }) {
  return (
    <View className="flex-row justify-around px-5 py-3">
      <Text className="text-2xl text-[#F4CE14]">{name}</Text>
      <Text className="text-2xl text-[#F4CE14]">{price}</Text>
    </View>
  );
}

const Seperator = () => <View className="bg-[#ffffff] h-1 w-full"></View>;

const Header = () => (
  <Text className="text-4xl text-center flex-wrap">Our Beautiful Menu</Text>
);
const Footer = () => (
  <Text className="text-4xl text-center flex-wrap">This is Footer</Text>
);

export default function WelcomeScreen() {
  const INITAL_FORM = { name: "", surname: "", message: "", phoneNum: "" };
  const [form, setForm] = useState(INITAL_FORM);
  const handleNameChange = text => {
    setForm({ ...form, name: text });
  };
  const handleSurnameChange = text => {
    setForm({ ...form, surname: text });
  };
  const handleMessageChange = text => {
    setForm({ ...form, message: text });
  };
  const handlePhoneChange = num => {
    setForm({ ...form, phoneNum: num });
  };

  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;
  const renderSectionHeader = ({ section: { title } }) => (
    <Text className="text-4xl text-center bg-[#EE9972] flex-wrap">{title}</Text>
  );
  return (
    <View className="bg-[#333333] flex-1 justify-center items-center">
      <KeyboardAvoidingView
        className="w-full h-full"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView keyboardDismissMode="on-drag" className="w-full h-full">
          <Text className="text-6xl font-extrabold text-center">
            Welcome to Little Lemon
          </Text>
          <Text className="font-light text-3xl text-yellow-400 text-center">
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. We
            would love to hear more about your experience with us!
          </Text>
          <Text className="text-center text-2xl text-red-50">
            How was your experience with us? Please let us know by filling out
            the form.
          </Text>
          <TextInput
            className="w-3/5 h-10 border-2 border-gray-600 bg-yellow-50 rounded-md text-3xl ml-auto mr-auto mt-5 mb-5"
            onChangeText={handleNameChange}
            value={form.name}
            placeholder="Enter your name"
          />
          <TextInput
            className="w-3/5 h-10 border-2 border-gray-600 bg-yellow-50 rounded-md text-3xl ml-auto mr-auto mt-5 mb-5"
            onChangeText={handleSurnameChange}
            value={form.surname}
            placeholder="Enter your surname"
          />
          <TextInput
            className="w-3/5 h-10 border-2 border-gray-600 bg-yellow-50 rounded-md text-3xl ml-auto mr-auto mt-5 mb-5"
            onChangeText={handlePhoneChange}
            value={form.phoneNum}
            placeholder="Phone Number"
            keyboardType={"phone-pad"}
          />
          <TextInput
            className="w-3/5 h-60 border-2 border-gray-600 bg-yellow-50 rounded-md text-3xl ml-auto mr-auto mt-5 mb-5"
            onChangeText={handleMessageChange}
            value={form.message}
            placeholder="Enter your message"
            multiline={true}
            maxLength={200}
          />
        </ScrollView>
        <SectionList
          ListHeaderComponent={Header}
          ListFooterComponent={Footer}
          className="w-full h-full"
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ItemSeparatorComponent={Seperator}
          keyExtractor={(item, index) => item + index}
        />
      </KeyboardAvoidingView>
    </View>
  );
}
