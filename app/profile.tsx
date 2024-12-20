import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const handleShare = () => {
    console.log("share");
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="absolute right-8 top-12 z-10">
        <TouchableOpacity
          onPress={handleShare}
          className="bg-primary/40 p-2 rounded-full"
        >
          <AntDesign name="sharealt" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4">
        {/* Profile Header - Spans Full Width */}
        <View className="bg-primary/5 p-4 rounded-xl mb-3">
          <View className="flex-row items-center gap-4">
            <Image
              source={{ uri: "https://avatars.githubusercontent.com/u/3?v=4" }}
              className="w-24 h-24 rounded-full"
            />
            <View className="flex-1">
              <Text className="text-quaternary text-2xl font-bold">
                John Doe
              </Text>
              <Text className="text-md text-gray-400">
                Web3 Domain Enthusiast
              </Text>
              <View className="flex-row items-center gap-2 mt-2">
                <View className="bg-secondary/20 px-3 py-1 rounded-full">
                  <Text className="text-secondary text-xs">Top Seller</Text>
                </View>
                <View className="bg-tertiary/20 px-3 py-1 rounded-full">
                  <Text className="text-tertiary text-xs">Early Adopter</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Bento Grid Layout */}
        <View className="flex-row gap-3 mb-3">
          {/* Portfolio Value - Left Column */}
          <View className="flex-1 bg-primary/5 p-4 rounded-xl">
            <Text className="text-quaternary text-lg font-semibold mb-2">
              Portfolio Value
            </Text>
            <View className="flex-row items-center gap-2">
              <Text className="text-primary text-2xl font-bold">$3,700</Text>
              <View className="flex-row items-center bg-green-500/20 px-2 py-1 rounded">
                <AntDesign name="arrowup" size={12} color="#22c55e" />
                <Text className="text-green-500 text-xs ml-1">+12.5%</Text>
              </View>
            </View>
          </View>

          {/* Quick Stats - Right Column */}
          <View className="flex-1 bg-primary/5 p-4 rounded-xl">
            <View className="flex-row items-center gap-10 pl-2">
              <View className="items-center">
                <Text className="text-white text-2xl font-bold">12</Text>
                <Text className="text-gray-300 text-sm">Owned</Text>
                <Text className="text-gray-500 text-xs">Domains</Text>
              </View>
              <View className="items-center">
                <Text className="text-white text-2xl font-bold">5</Text>
                <Text className="text-gray-300 text-sm">Domains</Text>
                <Text className="text-gray-500 text-xs">Sold</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Featured Domains - Full Width */}
        <View className="bg-primary/5 p-4 rounded-xl mb-3">
          <Text className="text-quaternary text-lg font-semibold mb-3">
            Featured Domains
          </Text>
          <View className="gap-2">
            <View className="flex-row justify-between items-center p-3 rounded-lg">
              <Text className="text-quaternary">crypto.eth</Text>
              <Text className="text-secondary">$1,200</Text>
            </View>
            <View className="flex-row justify-between items-center p-3 rounded-lg">
              <Text className="text-quaternary">web3.eth</Text>
              <Text className="text-secondary">$2,500</Text>
            </View>
          </View>
        </View>

        {/* Recent Sales and Activity Grid */}
        <View className="flex-row gap-3 mb-3">
          {/* Recent Sales - Left Column */}
          <View className="flex-1 bg-primary/5 p-4 rounded-xl">
            <Text className="text-quaternary text-lg font-semibold mb-3">
              Top Sale
            </Text>
            <View className="p-3 rounded-lg">
              <Text className="text-white text-xl">meta.eth</Text>
              <Text className="text-gray-400 mt-1">Sold for</Text>
              <Text className="text-primary text-lg font-bold">$3,500</Text>
            </View>
          </View>

          {/* Trading History - Right Column */}
          <View className="flex-1 bg-primary/5 p-4 rounded-xl">
            <Text className="text-quaternary text-lg font-semibold mb-3">
              Trading History
            </Text>
            <View className="p-3 rounded-lg">
              <View className="flex-col mb-2">
                <View className="flex-row items-center mb-1">
                  <Text className="text-white text-xl mr-2">30d</Text>
                  <Text className="text-gray-400 text-sm">Volume</Text>
                </View>
                <Text className="text-primary text-2xl font-bold">$12.5k</Text>
              </View>
              <View className="flex-row items-center justify-between">
                <Text className="text-gray-400 text-sm">
                  +25% from last month
                </Text>
                <AntDesign name="arrowup" size={12} color="#22c55e" />
              </View>
            </View>
          </View>
        </View>

        {/* Watchlist - Full Width */}
        <View className="bg-primary/5 p-4 rounded-xl">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-quaternary text-lg font-semibold">
              Watching
            </Text>
            <TouchableOpacity className="">
              <Text className="text-tertiary">See All</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row flex-wrap gap-2 ">
            <TouchableOpacity className="px-4 py-3 rounded-lg bg-primary/5">
              <View className="flex-row items-center gap-4 mb-1">
                <Text className="text-white font-medium">defi.eth</Text>
                <AntDesign name="star" size={16} color="#FFD700" />
              </View>
              <Text className="text-gray-300 font-bold">$5,000</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-3 rounded-lg bg-primary/5">
              <View className="flex-row items-center gap-4 mb-1">
                <Text className="text-white font-medium">nft.eth</Text>
                <AntDesign name="star" size={16} color="#FFD700" />
              </View>
              <Text className="text-gray-300 font-bold">$8,200</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-3 rounded-lg bg-primary/5">
              <View className="flex-row items-center gap-4 mb-1">
                <Text className="text-white font-medium">dao.eth</Text>
                <AntDesign name="star" size={16} color="#FFD700" />
              </View>
              <Text className="text-gray-300 font-bold">$12,000</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
