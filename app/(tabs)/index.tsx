import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

type DomainItem = {
  id: string;
  domainUrl: string;
  favouriteCount: number;
  createdAt: string;
  isAvailable: boolean;
};

const featuredDomains: DomainItem[] = [
  {
    id: "1",
    domainUrl: "www.domain1.com",
    favouriteCount: 120,
    createdAt: "2023-01-15",
    isAvailable: true,
  },
  {
    id: "2",
    domainUrl: "www.domain2.com",
    favouriteCount: 230,
    createdAt: "2023-05-22",
    isAvailable: false,
  },
  {
    id: "3",
    domainUrl: "www.domain3.com",
    favouriteCount: 180,
    createdAt: "2023-03-10",
    isAvailable: true,
  },
  {
    id: "4",
    domainUrl: "www.domain4.com",
    favouriteCount: 500,
    createdAt: "2023-02-18",
    isAvailable: true,
  },
  {
    id: "5",
    domainUrl: "www.domain5.com",
    favouriteCount: 90,
    createdAt: "2023-07-09",
    isAvailable: false,
  },
];

const renderItem = ({ item }: { item: DomainItem }) => (
  <TouchableOpacity
    onPress={() => alert(`Domain Selected: ${item.domainUrl}`)} // Handle item selection
    className="mr-4" // Margin right to space out the items
  >
    <View className="rounded-xl px-4 py-2 bg-gray-400/10">
      {/* Displaying domain name */}
      <Text className="text-white text-center text-lg font-semibold">
        {item.domainUrl}
      </Text>

      <View className="flex-row items-center my-1 justify-between">
        <View className="flex-row gap-x-1">
          <Ionicons name="heart" size={18} color="#ff4444" />
          <Text className="text-primary/80 font-bold">
            {item.favouriteCount}
          </Text>
        </View>
        <View className="rounded-full p-1 bg-gray-400/10">
          <Feather name="arrow-up-right" size={20} color="gray" />
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(true);
  const [notificationCount, setNotificationCount] = useState(0);

  const handleTextChange = (text: string) => {
    setSearchQuery(text);
    if (text.trim() === "") {
      setHasSearched(false);
    }
  };

  return (
    <View className="flex-1 bg-background pt-2">
      {/* Header Section */}
      <View className="bg-gray-400/5 mx-2 rounded-[30px] py-6">
        <View className="flex-row justify-between items-center px-4">
          <View className="flex-row items-center gap-x-3">
            <View className="border-2 border-primary p-1 rounded-full">
              <Image
                source={require("@/assets/images/profile.png")}
                className="w-14 h-14 rounded-full"
              />
            </View>
          </View>
          <View className="flex-row gap-x-2">
            {/* <View className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center relative">
              {notificationCount !== 0 && (
                <Text className="absolute top-0 right-0 text-gray-900 font-bold w-5 h-5 rounded-full bg-primary/90 flex items-center justify-center text-center">
                  {notificationCount}
                </Text>
              )}
              <AntDesign name="heart" size={24} color="white" />
            </View> */}
            <View className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center relative">
              {notificationCount !== 0 && (
                <Text className="absolute top-0 right-0 text-gray-900 font-bold w-5 h-5 rounded-full bg-primary/90 flex items-center justify-center text-center">
                  {notificationCount}
                </Text>
              )}
              <Ionicons name="notifications" size={24} color="white" />
            </View>
          </View>
        </View>

        {/* Hero Section */}
        <View className="px-4 mt-8">
          <Text className="text-5xl text-white">Hello, Max</Text>
          <Text className="text-white text-5xl">
            Which <Text className="font-bold text-primary/90">domain</Text> are
            you searching for?
          </Text>

          <View className="mt-4 bg-gray-400/10 rounded-full flex-row items-center w-full">
            <TextInput
              className="rounded-full outline-none px-6 py-5 text-lg text-quaternary w-full pr-14" // Added padding to the right for the icon
              placeholder="Type domain name"
              value={searchQuery}
              onChangeText={handleTextChange}
              returnKeyType="search"
              placeholderTextColor="gray"
            />
            <Feather
              name="arrow-up-right"
              size={30}
              color="white"
              className="absolute right-4" // Positioned the arrow on the right side inside the input box
            />
          </View>
        </View>
      </View>

      <View className="mt-4 mx-4">
        <Text className="text-white text-xl font-bold mb-2">
          Featured Domains
        </Text>
        {/* Horizontal Carousel for Featured Domains */}
        <FlatList
          data={featuredDomains}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View className="mt-8 mx-2 bg-gray-400/5 rounded-[30px] flex-row items-center justify-between gap-x-4 p-6">
        <View className="flex-1">
          <Text className="text-white text-2xl font-semibold">
            Want to <Text className="text-primary">SELL</Text> your Domain?
          </Text>
          <Text className="text-white text-md mt-2">
            Get the best deals by selling your domain to interested buyers.
            Don’t miss out!
          </Text>
        </View>
        <TouchableOpacity
          // onPress={handleSellDomain}
          className="bg-primary rounded-full p-4 flex items-center justify-center"
        >
          <View>
            <Feather name="arrow-up-right" size={30} color="black" />
            {/* <Text className="text-white text-center font-bold">Sell</Text> */}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
