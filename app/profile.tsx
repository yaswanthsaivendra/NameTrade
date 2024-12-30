import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import TradingHistoryChart from "@/components/TradingComponent";

const Profile = () => {
  const handleShare = () => {
    console.log("share");
  };

  return (
    <SafeAreaView className="flex-1">
      {/* ADD A GRADIENT HERE IN THE BACKGROUND MAKE IT BLUR TOWARDS THE END OF IT TO BLEND IT. */}

      {/* HEADER IMAGE */}
      <View className="flex justify-center items-center gap-y-2">
        <View className="border-2 border-primary/20 rounded-full p-[6px]">
          <Image
            source={{ uri: "https://avatars.githubusercontent.com/u/3?v=4" }}
            className="w-40 h-40 rounded-full"
          />
        </View>
        <View className="flex items-center justify-center">
          <View className="flex-row gap-x-1 items-center">
            <Text className="text-center text-white text-2xl font-bold">
              Nilanchala Panda
            </Text>
            <MaterialIcons name="verified" size={24} color="#1DA1F2" />
          </View>
          <Text className="text-white">Web3 Developer</Text>
        </View>

        {/* Fun Profile Questions */}
        <View className="mt-6 w-full px-4">
          <View className="flex-row flex-wrap justify-between">
            <View className="w-[48%] bg-gray-400/5 rounded-xl p-3 mb-3">
              <Text className="text-primary text-lg mb-1">🚀</Text>
              <Text className="text-gray-400 text-xs">BUILDING</Text>
              <Text className="text-white">Web3 Time Machine</Text>
            </View>

            <View className="w-[48%] bg-gray-400/5 rounded-xl p-3 mb-3">
              <Text className="text-primary text-lg mb-1">💻</Text>
              <Text className="text-gray-400 text-xs">STACK</Text>
              <Text className="text-white">Chaos.js + Coffee</Text>
            </View>

            <View className="w-[48%] bg-gray-400/5 rounded-xl p-3 mb-3">
              <Text className="text-primary text-lg mb-1">🎯</Text>
              <Text className="text-gray-400 text-xs">HUNTING</Text>
              <Text className="text-white">Epic Domains</Text>
            </View>

            <View className="w-[48%] bg-gray-400/5 rounded-xl p-3 mb-3">
              <Text className="text-primary text-lg mb-1">🎮</Text>
              <Text className="text-gray-400 text-xs">FUN FACT</Text>
              <Text className="text-white">Debug In Dreams</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="flex-row justify-between mx-4 pt-6">
        <View className="bg-gray-400/5 w-[48%] p-3 rounded-2xl relative">
          {/* Absolute number positioned to the right */}
          <Text
            className="absolute text-gray-700 font-bold"
            style={{ right: 0, fontSize: 65, top: 0 }}
          >
            10
          </Text>

          {/* Circular Icon Container */}
          <View className="rounded-full bg-green-700/20 w-12 h-12 flex justify-center items-center my-2">
            <AntDesign name="arrowdown" size={24} color="green" />
          </View>
          <Text className="text-gray-300 text-xl font-semibold mt-2">
            Domains Owned
          </Text>
          <Text className="text-white font-bold" style={{ fontSize: 36 }}>
            10
          </Text>
        </View>

        <View className="bg-gray-400/5 w-[48%] p-3 rounded-2xl relative">
          {/* Absolute number positioned to the right */}
          <Text
            className="absolute text-gray-700 font-bold"
            style={{ right: 0, fontSize: 65, top: 0 }}
          >
            01
          </Text>

          {/* Circular Icon Container */}
          <View className="rounded-full bg-red-700/20 w-12 h-12 flex justify-center items-center my-2">
            <AntDesign name="arrowup" size={24} color="#ff4444" />
          </View>
          <Text className="text-gray-300 text-xl font-semibold mt-2">
            Domains Sold
          </Text>
          <Text className="text-white font-bold" style={{ fontSize: 36 }}>
            01
          </Text>
        </View>
      </View>

      {/* TRADING HISTORY */}
      <View className="mx-4 gap-y-4 pt-6">
        <Text className="text-white text-2xl font-bold">
          My Trading History
        </Text>
        {/* TRADING HISTORY CHART THAT WILL SHOW THE PURCHASE AND SELLING OF THE DOMAINS WITH A POINTER ON A DOTTED LINE GRAPH, WITH TIME ON X-AXIS AND MONEY ON Y-AXIS. */}
        {/* <TradingHistoryChart /> */}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
