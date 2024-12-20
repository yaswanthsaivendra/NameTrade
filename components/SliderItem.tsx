import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import hero from "@/constants/images";

interface SliderItemProps {
  item: any;
  index: number;
}

const windowWidth = Dimensions.get("window").width;

const SliderItem = ({ item, index }: SliderItemProps) => {
  return (
    // <View
    //   className="flex-row items-center justify-center mt-5"
    //   style={{ width: windowWidth }}
    // >
    //   <View className="bg-primary/5 p-7 rounded-2xl w-96 relative mt-4 mx-2">
    //     <View className="absolute -right-1 -top-1 bg-primary/90 px-3 py-1.5 rounded-lg rotate-12 shadow-lg">
    //       <Text className="text-black font-bold text-sm">TOP 1</Text>
    //     </View>

    //     {/* Badge for type */}
    //     <View className="bg-tertiary/25 self-start px-4 py-1.5 rounded-full mb-4">
    //       <Text className="text-tertiary text-sm font-semibold">
    //         {item.type}
    //       </Text>
    //     </View>

    //     {/* Domain name with icon */}
    //     <View className="flex-row items-center gap-3 mb-6">
    //       <View className="bg-primary/25 p-2.5 rounded-full">
    //         <AntDesign name="link" size={24} color="#42DBF0" />
    //       </View>
    //       <Text className="text-primary text-2xl font-bold tracking-tight">
    //         {item.domain}
    //       </Text>
    //     </View>

    //     {/* Price and owner info */}
    //     <View className="flex-row justify-between items-center bg-gray-300/10 border-2 border-gray-600 p-4 rounded-xl">
    //       {/* <View className="flex-row justify-between items-center bg-[#1d2534] p-4 rounded-xl"> */}
    //       <View>
    //         <Text className="text-gray-400 text-sm mb-1.5">Current Price</Text>
    //         <Text className="text-quaternary text-xl font-bold">
    //           {item.price}
    //         </Text>
    //       </View>
    //       <View className="items-end">
    //         <Text className="text-gray-400 text-sm mb-1.5">Owner</Text>
    //         <View className="flex-row items-center gap-2.5">
    //           <Image
    //             source={{ uri: "https://placeholder.com/32" }}
    //             className="w-6 h-6 rounded-full border border-gray-600"
    //           />
    //           <Text className="text-quaternary font-medium">{item.owner}</Text>
    //         </View>
    //       </View>
    //     </View>

    //     <View>
    //       <Image
    //         source={require("../assets/images/Hero.png")}
    //         className="w-20 h-32 object-cover"
    //       />
    //     </View>
    //   </View>
    // </View>

    <View
      className="flex-row items-center justify-center mt-5"
      style={{ width: windowWidth }}
    >
      <View className="bg-primary/5 p-6 rounded-2xl w-96 relative mt-4 mx-2">
        {/* Badge for type */}
        <View className="bg-tertiary/25 self-start px-4 py-1.5 rounded-full mb-4">
          <Text className="text-tertiary text-xl font-semibold">
            {item.type}
          </Text>
        </View>

        {/* Domain name with icon */}
        <View className="flex-row items-center gap-3 mb-6">
          <View className="bg-primary/25 p-2.5 rounded-full">
            <AntDesign name="link" size={24} color="#42DBF0" />
          </View>
          <Text className="text-primary text-2xl font-bold tracking-tight">
            {item.domain}
          </Text>
        </View>

        {/* Price and owner info */}
        <View className="flex-row justify-between items-center bg-gray-300/10 border-2 border-gray-600 p-4 rounded-xl mb-6">
          <View>
            <Text className="text-gray-400 text-sm mb-1.5">Current Price</Text>
            <Text className="text-quaternary text-xl font-bold">
              {item.price}
            </Text>
          </View>
          <View className="items-end">
            <Text className="text-gray-400 text-sm mb-1.5">Owner</Text>
            <View className="flex-row items-center gap-2.5">
              <Image
                source={{ uri: "https://placeholder.com/32" }}
                className="w-6 h-6 rounded-full border border-gray-600"
              />
              <Text className="text-quaternary font-medium">{item.owner}</Text>
            </View>
          </View>
        </View>

        {/* Hero Image positioned to the right and protruding from the top */}
        <View className="absolute bottom-0 right-0">
          <Image
            source={require("../assets/images/Hero.png")}
            className="w-32 h-48 object-cover"
          />
        </View>

        {/* The badge for TOP 1 remains in the upper-right corner */}
        <View className="absolute -right-1 -top-1 bg-primary/90 px-3 py-1.5 rounded-lg rotate-12 shadow-lg">
          <Text className="text-black font-bold text-sm">TOP 1</Text>
        </View>
      </View>
    </View>
  );
};

export default SliderItem;
