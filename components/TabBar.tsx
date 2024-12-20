import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import colors from "@/constants/colors";

const TabBar = ({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) => {
  const icons = {
    index: (props: any) => <AntDesign size={24} {...props} name="home" />,
    explore: (props: any) => <Feather size={24} {...props} name="compass" />,
    create: (props: any) => <Entypo size={24} {...props} name="wallet" />,
    manage: (props: any) => <AntDesign size={24} {...props} name="bars" />,
  };

  return (
    <View className="flex flex-row justify-between items-center gap-[2px] bg-gray-800 backdrop-blur-lg absolute bottom-0 left-0 right-0 py-[2px] px-10 rounded-full shadow-lg shadow-black/25 z-10">
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            className={`flex-row items-center justify-center py-[18px] px-[18px] rounded-full`}
            key={index}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {icons[route.name as keyof typeof icons]({
              color: isFocused ? colors.primary : 'gray',
            })}
            {/* {isFocused && (
          <Text className={`text-sm ${isFocused ? `text-black` : 'text-gray-600'}`}>
            {label}
          </Text>
        )} */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
