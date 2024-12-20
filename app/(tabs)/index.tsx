import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import Slider from '@/components/Slider';
import colors from '@/constants/colors';

// Mock data for the carousel
const DOMAIN_DATA = [
  {
    id: 1,
    type: 'Domain of the Week',
    domain: 'example.com',
    price: '$1,999',
    owner: 'John Doe'
  },
  {
    id: 2,
    type: 'Featured Domain',
    domain: 'crypto.io',
    price: '$2,499',
    owner: 'Jane Smith'
  },
  {
    id: 3,
    type: 'Domain of the Month',
    domain: 'example.com',
    price: '$1,999',
    owner: 'John Doe'
  },
  // Add more items as needed
];


export default function HomeScreen() {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View className="flex-1 bg-background pt-12 gap-6">
      {/* Header Section */}
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="text-gray-400">Welcome back,</Text>
          <Text className="text-white text-xl font-bold">John Doe</Text>
        </View>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/3?v=4' }}
          className="w-10 h-10 rounded-full"
        />
      </View>

      {/* Carousel Section */}
      <Slider data={DOMAIN_DATA} />

      {/* Buy/Sell Section */}
      <View className="flex-row justify-center gap-8">
        <TouchableOpacity 
            className="px-10 py-5 rounded-2xl flex-row items-center bg-primary/10 border-l-4 border-primary"
            style={{
                shadowColor: colors.primary,
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 8,
            }}
        >
            <AntDesign name="shoppingcart" size={24} color={colors.primary} />
            <Text className="text-primary font-bold text-lg ml-3">Buy</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            className="px-10 py-5 rounded-2xl flex-row items-center bg-tertiary/10 border-l-4 border-tertiary"
            style={{
                shadowColor: colors.tertiary,
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 8,
            }}
        >
            <AntDesign name="tag" size={24} color={colors.tertiary} />
            <Text className="text-tertiary font-bold text-lg ml-3">Sell</Text>
        </TouchableOpacity>
      </View>

      {/* Hot Right Now Section */}
      <View className="px-4">
        <View className="flex-row items-center mb-4">
          <FontAwesome5 name="fire-alt" size={24} color={colors.tertiary} />
          <Text className="text-white text-xl font-bold ml-2">Hot Right Now</Text>
        </View>

        <ScrollView className=""
            contentContainerStyle={{
                gap: 8,
                paddingBottom: 100,
            }}
        >
          <TouchableOpacity className="flex-row justify-between items-center bg-primary/5 p-6 rounded-xl h-28">
            <View className="flex-row items-center gap-4">
              <View>
                <Text className="text-quaternary text-xl font-bold mb-1">metaverse.eth</Text>
                <View className="flex-row items-center gap-2 mb-2">
                  <View className="bg-green-500/20 px-2 py-0.5 rounded">
                    <Text className="text-green-500 text-xs">Available</Text>
                  </View>
                  <View className="bg-blue-500/20 px-2 py-0.5 rounded">
                    <Text className="text-blue-500 text-xs">Premium</Text>
                  </View>
                </View>
                <View className="flex-row items-center gap-2">
                  <Image 
                    source={{ uri: 'https://avatars.githubusercontent.com/u/3?v=4' }}
                    className="w-5 h-5 rounded-full"
                  />
                  <Text className="text-gray-400 text-sm">Listed by CryptoKing</Text>
                </View>
              </View>
            </View>
            
            <View className="items-end gap-3">
              <View className="flex-row items-center gap-4">
                <TouchableOpacity className="bg-primary/10 p-2 rounded-full">
                  <AntDesign name="hearto" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
              <View>
                <Text className="text-quaternary font-bold text-xl">$15,000</Text>
                <Text className="text-gray-400 text-xs text-right">Last Sale: $12,000</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row justify-between items-center bg-primary/5 p-6 rounded-xl h-28">
            <View className="flex-row items-center gap-4">
              <View>
                <Text className="text-quaternary text-xl font-bold mb-1">startup.com</Text>
                <View className="flex-row items-center gap-2 mb-2">
                  <View className="bg-green-500/20 px-2 py-0.5 rounded">
                    <Text className="text-green-500 text-xs">Available</Text>
                  </View>
                  <View className="bg-blue-500/20 px-2 py-0.5 rounded">
                    <Text className="text-blue-500 text-xs">Premium</Text>
                  </View>
                </View>
                <View className="flex-row items-center gap-2">
                  <Image 
                    source={{ uri: 'https://avatars.githubusercontent.com/u/4?v=4' }}
                    className="w-5 h-5 rounded-full"
                  />
                  <Text className="text-gray-400 text-sm">Listed by DomainPro</Text>
                </View>
              </View>
            </View>
            
            <View className="items-end gap-3">
              <View className="flex-row items-center gap-4">
                <TouchableOpacity className="bg-primary/10 p-2 rounded-full">
                  <AntDesign name="hearto" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
              <View>
                <Text className="text-quaternary font-bold text-xl">$8,500</Text>
                <Text className="text-gray-400 text-xs text-right">Last Sale: $6,000</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row justify-between items-center bg-primary/5 p-6 rounded-xl h-28">
            <View className="flex-row items-center gap-4">
              <View>
                <Text className="text-quaternary text-xl font-bold mb-1">software.io</Text>
                <View className="flex-row items-center gap-2 mb-2">
                  <View className="bg-green-500/20 px-2 py-0.5 rounded">
                    <Text className="text-green-500 text-xs">Available</Text>
                  </View>
                  <View className="bg-blue-500/20 px-2 py-0.5 rounded">
                    <Text className="text-blue-500 text-xs">Premium</Text>
                  </View>
                </View>
                <View className="flex-row items-center gap-2">
                  <Image 
                    source={{ uri: 'https://avatars.githubusercontent.com/u/5?v=4' }}
                    className="w-5 h-5 rounded-full"
                  />
                  <Text className="text-gray-400 text-sm">Listed by TechBroker</Text>
                </View>
              </View>
            </View>
            
            <View className="items-end gap-3">
              <View className="flex-row items-center gap-4">
                <TouchableOpacity className="bg-primary/10 p-2 rounded-full">
                  <AntDesign name="hearto" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
              <View>
                <Text className="text-quaternary font-bold text-xl">$12,000</Text>
                <Text className="text-gray-400 text-xs text-right">Last Sale: $9,000</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      
    </View>
  );
}