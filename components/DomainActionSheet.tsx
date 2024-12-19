import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { AntDesign } from '@expo/vector-icons';
import { useUI } from '../context/UIContext';
import colors from '../constants/colors';

type DomainActionSheetProps = {
  bottomSheetRef: React.RefObject<BottomSheetModal>;
  selectedDomain: { domain: string; seller: string; price: number } | null; 
};

const PERIOD_MULTIPLIERS = {
  '1 Month': 0.1,
  '1 Year': 1,
  '2 Years': 1.8,
  '5 Years': 4,
};

const DomainActionSheet = ({ bottomSheetRef, selectedDomain }: DomainActionSheetProps) => {
  const { setTabBarVisible } = useUI();
  const snapPoints = useMemo(() => ['80%'], []);
  const [selectedPeriod, setSelectedPeriod] = useState('1 Year');

  const calculatePrice = (basePrice: number, period: string) => {
    const multiplier = PERIOD_MULTIPLIERS[period as keyof typeof PERIOD_MULTIPLIERS] || 1;
    return (basePrice * multiplier).toFixed(2);
  };

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onDismiss={() => setTabBarVisible(true)}
      backgroundStyle={{
        backgroundColor: '#0B1A1E',
        borderRadius: 24,
        shadowColor: "#42DBF0",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 5,
      }}
      handleIndicatorStyle={{
        backgroundColor: '#42DBF0',
        width: 40,
      }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <View className="flex-1 px-6">
          {/* Domain and Price Header */}
          <View className="flex-row justify-between items-center mb-6">
            <View>
              <Text className="text-gray-400 text-sm mb-1">Domain Name</Text>
              <Text className="text-2xl font-semibold text-quaternary">
                {selectedDomain?.domain}
              </Text>
            </View>
            <View className="items-end">
              <Text className="text-gray-400 text-sm mb-1">Total Price</Text>
              <Text className="text-2xl font-bold text-primary">
                ${selectedDomain?.price && calculatePrice(selectedDomain.price, selectedPeriod)}
              </Text>
            </View>
          </View>

          {/* Period Selection */}
          <View className="mb-8">
            <Text className="text-base font-semibold mb-3 text-quaternary">Registration Period</Text>
            <View className="grid grid-cols-2 gap-3">
              {Object.keys(PERIOD_MULTIPLIERS).map((period) => (
                <TouchableOpacity
                  key={period}
                  className={`p-4 rounded-xl border-2 ${
                    selectedPeriod === period 
                      ? 'border-primary bg-primary/10' 
                      : 'border-gray-700 bg-gray-800/50'
                  }`}
                  onPress={() => setSelectedPeriod(period)}
                >
                  <Text className={`text-center font-medium mb-1 ${
                    selectedPeriod === period ? 'text-primary' : 'text-gray-300'
                  }`}>
                    {period}
                  </Text>
                  <Text className="text-center text-xs text-gray-400">
                    ${selectedDomain?.price && calculatePrice(selectedDomain.price, period)}/total
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Action Buttons */}
          <View className="flex-row gap-4">
            <TouchableOpacity
              className="flex-1 border-2 border-primary/30 py-3.5 rounded-xl"
              onPress={() => {
                console.log('Add to cart');
              }}
            >
              <Text className="text-center font-semibold text-primary">Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 bg-primary py-3.5 rounded-xl"
              onPress={() => {
                console.log('Buy now');
              }}
            >
              <Text className="text-center text-black font-semibold">Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 24,
  },
});

export default DomainActionSheet; 