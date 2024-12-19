import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Slider from '@/components/Slider';
import { LinearGradient } from 'expo-linear-gradient';
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
  // Add more items as needed
];


export default function HomeScreen() {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View className="flex-1 bg-background pt-12 gap-8">
      {/* Header Section */}
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="text-gray-400">Welcome back,</Text>
          <Text className="text-white text-xl font-bold">Yash Vendra</Text>
        </View>
        <Image
          source={{ uri: 'https://placeholder.com/150' }}
          className="w-10 h-10 rounded-full"
        />
      </View>

      {/* Carousel Section */}
      <Slider data={DOMAIN_DATA} />




      {/* Buy/Sell Section */}
      <View className="flex-row justify-center gap-8">
        <TouchableOpacity
          onPress={() => {/* Handle buy press */ }}
        >
          <LinearGradient
            colors={[ '#42DBF0', '#FF3186']}
            className="px-8 py-4 rounded-xl flex-row items-center"
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              shadowColor: colors.primary,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              borderRadius: 10,
            }}
          >
            <AntDesign name="shoppingcart" size={24} color="black" />
            <Text className="text-black font-semibold ml-2">Buy</Text>
          </LinearGradient>

        </TouchableOpacity>

        <TouchableOpacity
          className="bg-gray-800 px-8 py-4 rounded-xl flex-row items-center"
          onPress={() => {/* Handle sell press */ }}
        >
          <AntDesign name="tag" size={24} color="white" />
          <Text className="text-white font-semibold ml-2">Sell</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}