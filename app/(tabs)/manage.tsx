import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Manage = () => {
  return (
    <View className='flex-1 bg-background pt-6 px-4'>
      {/* Profile Section */}
      <View className="bg-gray-400/5 p-4 rounded-xl mb-6">
        <View className="flex-row items-center gap-4">
          <Image        
            source={require("@/assets/images/profile.png")}
            className="w-14 h-14 rounded-full"
          />    
          <View>
            <Text className="text-quaternary text-2xl font-bold">Max Smith</Text>
            <Text className="text-gray-400">Domain Trading Enthusiast</Text>
          </View>
        </View>
      </View>

      {/* Settings Options */}
      <ScrollView className="flex-1">
        <View className="">
          {/* Account & Payments */}
          <View className="space-y-0.5 mb-4">
            <Text className="text-gray-400 text-sm mb-2 px-2">Account & Payments</Text>
            {[
              {
                icon: <AntDesign name="user" size={24} color="white" />,
                title: "Account & Security"
              },
              {
                icon: <AntDesign name="creditcard" size={24} color="white" />,
                title: "Payment Methods"
              },
              {
                icon: <Feather name="map-pin" size={24} color="white" />,
                title: "Address"
              }
            ].map((item, index) => (
              <TouchableOpacity 
                key={index}
                className="p-4 flex-row justify-between items-center"
              >
                <View className="flex-row items-center gap-3">
                  {item.icon}
                  <Text className="text-quaternary text-lg">{item.title}</Text>
                </View>
                <Feather name="chevron-right" size={24} color="gray" />
              </TouchableOpacity>
            ))}
          </View>

          {/* Preferences */}
          <View className="space-y-0.5 mb-4">
            <Text className="text-gray-400 text-sm mb-2 px-2">Preferences</Text>
            {[
              {
                icon: <Ionicons name="notifications-outline" size={24} color="white" />,
                title: "Notifications"
              },
              {
                icon: <AntDesign name="clockcircle" size={24} color="white" />,
                title: "Transaction History"
              },
              {
                icon: <Feather name="settings" size={24} color="white" />,
                title: "App Settings"
              }
            ].map((item, index) => (
              <TouchableOpacity 
                key={index}
                className="p-4 flex-row justify-between items-center"
              >
                <View className="flex-row items-center gap-3">
                  {item.icon}
                  <Text className="text-quaternary text-lg">{item.title}</Text>
                </View>
                <Feather name="chevron-right" size={24} color="gray" />
              </TouchableOpacity>
            ))}
          </View>

          {/* Support & Legal */}
          <View className="space-y-0.5 mb-4">
            <Text className="text-gray-400 text-sm mb-2 px-2">Support & Legal</Text>
            {[
              {
                icon: <Feather name="help-circle" size={24} color="white" />,
                title: "Help & Feedback"
              },
              {
                icon: <Feather name="shield" size={24} color="white" />,
                title: "Privacy Policy"
              },
              {
                icon: <Feather name="file-text" size={24} color="white" />,
                title: "Terms of Service"
              }
            ].map((item, index) => (
              <TouchableOpacity 
                key={index}
                className="p-4 flex-row justify-between items-center"
              >
                <View className="flex-row items-center gap-3">
                  {item.icon}
                  <Text className="text-quaternary text-lg">{item.title}</Text>
                </View>
                <Feather name="chevron-right" size={24} color="gray" />
              </TouchableOpacity>
            ))}
          </View>

          {/* App Version Info */}
          <View className="items-center mb-8">
            <Text className="text-gray-500">App Version 1.0.0</Text>
          </View>

          {/* Made with love */}
          <View className="items-center mb-4">
            <Text className="text-gray-500">Made with ❤️ by Yash and Nilan</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Manage;
