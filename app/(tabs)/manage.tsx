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
        <View className="space-y-4">
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
            },
            {
              icon: <Ionicons name="notifications-outline" size={24} color="white" />,
              title: "Notifications"
            },
            {
              icon: <AntDesign name="clockcircle" size={24} color="white" />,
              title: "Transaction History"
            },
            {
              icon: <Feather name="help-circle" size={24} color="white" />,
              title: "Help & Feedback"
            },
            {
              icon: <Feather name="settings" size={24} color="white" />,
              title: "App Settings"
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
              className={`bg-gray-400/5 p-4 rounded-xl flex-row justify-between items-center ${index === 8 ? 'mb-6' : ''}`}
            >
              <View className="flex-row items-center gap-3">
                {item.icon}
                <Text className="text-quaternary text-lg">{item.title}</Text>
              </View>
              <Feather name="chevron-right" size={24} color="gray" />
            </TouchableOpacity>
          ))}

          {/* App Version Info */}
          <View className="items-center mb-8">
            <Text className="text-gray-500">App Version 1.0.0</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Manage;
