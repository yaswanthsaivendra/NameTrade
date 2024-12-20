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
        <View className="flex-row items-center justify-center" style={{ width: windowWidth }}>
            <View className="bg-gray-800/50 p-7 rounded-2xl w-96 relative mt-3 mx-2">
               
                <View className="absolute -right-1 -top-1 bg-gray-200 px-3 py-1.5 rounded-lg rotate-12 shadow-lg">
                    <Text className="text-gray-800 font-bold text-sm">TOP 1</Text>
                </View>

                {/* Badge for type */}
                <View className="bg-tertiary/25 self-start px-4 py-1.5 rounded-full mb-4">
                    <Text className="text-tertiary text-sm font-semibold">{item.type}</Text>
                </View>

                {/* Domain name with icon */}
                <View className="flex-row items-center gap-3 mb-6">
                    <View className="bg-gray-200/25 p-2.5 rounded-full">
                        <AntDesign name="link" size={24} color="#e5e7eb" />
                    </View>
                    <Text className="text-quaternary text-2xl font-bold tracking-tight">{item.domain}</Text>
                </View>

                {/* Price and owner info */}
                <View className="flex-row justify-between items-center bg-[#1d2534] p-4 rounded-xl">
                    <View>
                        <Text className="text-gray-400 text-sm mb-1.5">Current Price</Text>
                        <Text className="text-quaternary text-xl font-bold">{item.price}</Text>
                    </View>
                    <View className="items-end">
                        <Text className="text-gray-400 text-sm mb-1.5">Owner</Text>
                        <View className="flex-row items-center gap-2.5">
                            <Image 
                                source={{ uri: 'https://avatars.githubusercontent.com/u/3?v=4' }}
                                className="w-6 h-6 rounded-full border border-gray-600"
                            />
                            <Text className="text-quaternary font-medium">{item.owner}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
      </View>
    </View>
  );
};

export default SliderItem;
