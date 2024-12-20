import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

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
    domainUrl: "travel.com",
    favouriteCount: 120,
    createdAt: "2023-01-15",
    isAvailable: true,
  },
  {
    id: "2",
    domainUrl: "photos.net",
    favouriteCount: 230,
    createdAt: "2023-05-22",
    isAvailable: false,
  },
  {
    id: "3",
    domainUrl: "recipes.org",
    favouriteCount: 180,
    createdAt: "2023-03-10",
    isAvailable: true,
  },
  {
    id: "4",
    domainUrl: "weather.app",
    favouriteCount: 500,
    createdAt: "2023-02-18",
    isAvailable: true,
  },
  {
    id: "5",
    domainUrl: "fitness.club",
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
    <View className="rounded-2xl px-3 py-2 bg-gray-400/10">
      {/* Displaying domain name */}
      <Text className="text-white text-center text-lg font-semibold">
        {item.domainUrl}
      </Text>

      <View className="flex-row items-center my-1 justify-between gap-3">
        <View className="flex-row gap-x-1">
          <Ionicons name="heart" size={18} color="#ff4444" />
          <Text className="text-primary/80 font-bold">
            {item.favouriteCount}
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(true);
  const [notificationCount, setNotificationCount] = useState(0);
  const router = useRouter();

  const handleTextChange = (text: string) => {
    setSearchQuery(text);
    if (text.trim() === "") {
      setHasSearched(false);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 bg-background pt-2"
        contentContainerStyle={{
          paddingBottom: 90,
        }}
      >
        {/* Header Section */}
        <View className="bg-gray-400/5 mx-2 rounded-[30px] py-6">
          <View className="flex-row justify-between items-center px-4">
            <View className="flex-row items-center gap-x-3">
              <TouchableOpacity
                onPress={() => router.push("/profile")}
                className="border-2 border-primary p-1 rounded-full"
              >
                <Image
                  source={require("@/assets/images/profile.png")}
                  className="w-14 h-14 rounded-full"
                />
              </TouchableOpacity>
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
              Which <Text className="font-bold text-primary/90">domain</Text>{" "}
              are you searching for?
            </Text>

            <View className="mt-4 bg-gray-400/10 rounded-full flex-row items-center w-full">
              <TextInput
                className="rounded-full outline-none px-6 py-5 text-lg text-quaternary w-full pr-14"
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
                className="absolute right-4"
              />
            </View>
          </View>
        </View>

        <View className="flex-1">
        {/* Featured Domain */}
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

          <View className="mt-4 mx-4">
            <Text className="text-white text-xl font-bold mb-2">
              Your Account
            </Text>
            <View className="flex-row justify-between">
              {/* Best Buy Card */}
              <View className="rounded-3xl p-4 w-[48%] bg-gray-400/10">
                <Text className="text-white text-xl font-semibold">
                  Best Buy
                </Text>
                <View className="mt-4">
                  {/* Domain Name */}
                  <Text className="text-white text-lg font-bold mb-2">
                    travel.com
                  </Text>

                  {/* Purchase Date and Price */}
                  <View className="flex-row justify-between items-center">
                    <Text className="text-white text-sm opacity-80">
                      Aug 10, 2023
                    </Text>
                    <Text className="text-white text-lg font-semibold opacity-90">
                      $35,000
                    </Text>
                  </View>

                  {/* Status */}
                  <Text className="text-white text-sm text-center font-bold mt-4 bg-green-600 p-1 rounded-full">
                    Purchased
                  </Text>
                </View>
              </View>

              {/* Recent Sell Card */}
              <View className="rounded-3xl p-4 w-[48%] bg-gray-400/10">
                <Text className="text-white text-xl font-semibold">
                  Recent Sell
                </Text>
                <View className="mt-4">
                  {/* Domain Name */}
                  <Text className="text-white text-lg font-bold mb-2">
                    hotels.net
                  </Text>

                  {/* Sell Date and Price */}
                  <View className="flex-row justify-between items-center">
                    <Text className="text-white text-sm opacity-80">
                      Dec 1, 2023
                    </Text>
                    <Text className="text-white text-lg font-semibold opacity-90">
                      $28,500
                    </Text>
                  </View>

                  {/* Status */}
                  <Text className="text-white text-sm mt-4 text-center font-bold bg-blue-600 p-1 rounded-full">
                    Sold
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Selling Your Domain Card */}
          <View className="mt-8 mx-2 bg-gray-400/5 rounded-[30px] flex-row items-center justify-between gap-x-4 p-6">
            <View className="flex-1">
              <Text className="text-white text-2xl font-semibold">
                Want to <Text className="text-primary">SELL</Text> your Domain?
              </Text>
              <Text className="text-white text-md mt-2">
                Get the best deals by selling your domain to interested buyers.
                Don't miss out!
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
      </ScrollView>


    </SafeAreaView>
  );
};

export default HomeScreen;
