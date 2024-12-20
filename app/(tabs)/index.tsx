import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Slider from "@/components/Slider";
import colors from "@/constants/colors";
import React from "react";

// Mock data for the carousel
const DOMAIN_DATA = [
  {
    id: 1,
    type: "Domain of the Week",
    domain: "example.com",
    price: "$1,999",
    owner: "John Doe",
  },
  {
    id: 2,
    type: "Featured Domain",
    domain: "crypto.io",
    price: "$2,499",
    owner: "Jane Smith",
  },
  {
    id: 3,
    type: "Domain of the Month",
    domain: "example.com",
    price: "$1,999",
    owner: "John Doe",
  },
  // Add more items as needed
];

export default function HomeScreen() {
  const windowWidth = Dimensions.get("window").width;

  return (
    <View className="flex-1 bg-background pt-12 gap-8">
      {/* Header Section */}
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="text-gray-400">Welcome back,</Text>
          <Text className="text-white text-xl font-bold">Yash Vendra</Text>
        </View>
        <Image
          source={{ uri: "https://placeholder.com/150" }}
          className="w-10 h-10 rounded-full"
        />
      </View>

      {/* Carousel Section */}
      <Slider data={DOMAIN_DATA} />

      {/* Buy/Sell Section */}
      <View className="flex-row justify-center gap-8">
        <TouchableOpacity
          className="px-10 py-5 rounded-2xl flex-row items-center bg-primary/10 border-l-4 border-primary"
          style={{
            shadowColor: colors.primary,
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
          }}
        >
          <AntDesign name="shoppingcart" size={24} color={colors.primary} />
          <Text className="text-primary font-bold text-lg ml-3">Buy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="px-10 py-5 rounded-2xl flex-row items-center bg-tertiary/10 border-l-4 border-tertiary"
          style={{
            shadowColor: colors.tertiary,
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
          }}
        >
          <AntDesign name="tag" size={24} color={colors.tertiary} />
          <Text className="text-tertiary font-bold text-lg ml-3">Sell</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
