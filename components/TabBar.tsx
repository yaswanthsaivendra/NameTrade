import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";

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
    profile: (props: any) => <AntDesign size={24} {...props} name="user" />,
  };

  return (
    <View className="flex flex-row justify-between items-center gap-[2px] bg-primary/5 backdrop-blur-lg absolute bottom-4 left-0 right-0 mx-[5rem] py-[2px] rounded-full shadow-lg shadow-black/25 z-10">
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
            className={`flex-row items-center justify-center py-[18px] px-[18px] rounded-full ${
              isFocused ? "bg-primary" : "bg-primary/10"
            }`}
            key={index}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {icons[route.name as keyof typeof icons]({
              color: isFocused ? "#000" : "#fff",
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
