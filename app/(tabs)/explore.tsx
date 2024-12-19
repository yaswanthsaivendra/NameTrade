import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useCallback } from 'react'
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import DomainActionSheet from '../../components/DomainActionSheet';
import { useUI } from '../../context/UIContext';

// Mock data for demonstration
const mockResults = [
  { domain: 'example.com', seller: 'John Doe', price: 299 },
  { domain: 'business.net', seller: 'Jane Smith', price: 499 },
  { domain: 'startup.io', seller: 'Mike Johnson', price: 899 },
  { domain: 'tech.dev', seller: 'Sarah Williams', price: 399 },
];

const recentSearches = [
  'crypto.com',
  'nft.io',
  'meta.com',
  'web3.io'
];

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [selectedDomain, setSelectedDomain] = useState<{ domain: string; seller: string, price: number } | null>(null);
  const { setTabBarVisible } = useUI();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setHasSearched(true);
    }
  };

  const handleTextChange = (text: string) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setHasSearched(false);
    }
  };

  const handleDomainSelect = useCallback((domain: { domain: string; seller: string, price: number }) => {
    setSelectedDomain(domain);
    setTabBarVisible(false);
    bottomSheetRef.current?.present();
  }, []);


  return (
    <BottomSheetModalProvider>
      <View className="flex-1 bg-background pt-12">
        {/* Search Bar */}
        <View className="px-4 mb-4">
          <View className="flex-row items-center bg-gray-600 px-4 py-3 rounded-full">
            <Feather name="search" size={20} color="gray" />
            <TextInput
              className="flex-1 ml-2 text-base outline-none text-quaternary"
              placeholder="Search domains..."
              value={searchQuery}
              onChangeText={handleTextChange}
              onSubmitEditing={handleSearch}
              returnKeyType="search"
              placeholderTextColor="gray"
            />
          </View>
        </View>

        <ScrollView className="flex-1 px-4">
          {!hasSearched ? (
            // Recent Searches Section
            <View>
              <Text className="text-lg text-quaternary font-semibold mb-3">Recent Searches</Text>
              <View className="flex-row flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <TouchableOpacity
                    key={index}
                    className="flex-row items-center bg-gray-800 rounded-full px-2 py-1"
                    onPress={() => {
                      setSearchQuery(search);
                      setHasSearched(true);
                    }}
                  >
                    <Text className="text-base text-quaternary">{search}</Text>
                  </TouchableOpacity>
                ))}
              </View>

            </View>
          ) : (
            // Search Results Section
            <View>
              {/* Sort and Filter Options */}
              <View className="flex-row justify-between items-center mb-4">
                <TouchableOpacity
                  className="flex-row items-center bg-gray-800  px-4 py-2 rounded-full"
                  onPress={() => console.log('Sort')}
                >
                  <MaterialIcons name="sort" size={20} color="gray" />
                  <Text className="ml-2 text-quaternary">Sort</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-row items-center bg-gray-800 px-4 py-2 rounded-full"
                  onPress={() => console.log('Filter')}
                >
                  <Feather name="filter" size={20} color="gray" />
                  <Text className="ml-2 text-quaternary">Filter</Text>
                </TouchableOpacity>
              </View>

              {/* Results */}
              <View className='flex-1 gap-2'>
                {mockResults.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    className="flex-row items-center justify-between p-4 bg-[#1a1919] rounded-lg"
                    onPress={() => handleDomainSelect(item)}
                  >
                    <View>
                      <Text className="text-md font-semibold text-quaternary">{item.domain}</Text>
                      <Text className="text-sm text-gray-400 text-opacity-50">{item.seller}</Text>
                    </View>
                    <View className="flex-row items-center gap-3">
                      <Text className="text-base font-semibold text-quaternary">
                        ${item.price}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
        </ScrollView>

        <DomainActionSheet
          bottomSheetRef={bottomSheetRef}
          selectedDomain={selectedDomain}
        />
      </View>
    </BottomSheetModalProvider>
  )
}

export default Explore