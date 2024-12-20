import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(true);

  const handleTextChange = (text: string) => {
    setSearchQuery(text);
    if (text.trim() === "") {
      setHasSearched(false);
    }
  };

  return (
    <View className="flex-1 bg-background pt-8">
      {/* Header Section */}
      <View className="flex-row justify-between items-center px-4">
        <View className="flex-row items-center gap-x-3">
          <View className="border-2 border-primary p-1 rounded-full">
            <Image
              source={require("@/assets/images/profile.png")}
              className="w-14 h-14 rounded-full"
            />
          </View>
        </View>
        <View className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center relative">
          <Text className="absolute bg-primary">2</Text>
          {/* NOTIFICATION ICON */}
          <Image
            source={{ uri: "https://placeholder.com/150" }}
            className="w-10 h-10 rounded-full"
          />
        </View>
      </View>

      {/* Hero Section */}
      <View className="px-4 mt-8 bg-gray-400">
        <Text className="text-5xl text-white">Hello, Max</Text>
        <Text className="text-white text-5xl">
          Which <Text className="font-bold text-primary/90">domain</Text> are
          you searching for?
        </Text>

        <View className="mt-4 bg-gray-400/10 rounded-full flex-row items-center">
          <TextInput
            className="rounded-full outline-none px-6 py-5 text-lg text-quaternary w-[90%]"
            placeholder="Type domain name"
            value={searchQuery}
            onChangeText={handleTextChange}
            // onSubmitEditing={handleSearch}
            returnKeyType="search"
            placeholderTextColor="gray"
          />
          <Feather
            name="arrow-up-right"
            size={30}
            color="red"
            className="mr-11"
          />
        </View>

        <View>
          <Text className="text-white">Hello</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
