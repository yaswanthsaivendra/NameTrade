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
  const snapPoints = useMemo(() => ['50%'], []);
  const [selectedPeriod, setSelectedPeriod] = useState('1 Year');

  const calculatePrice = (basePrice: number, period: string) => {
    const multiplier = PERIOD_MULTIPLIERS[period as keyof typeof PERIOD_MULTIPLIERS] || 1;
    return (basePrice * multiplier).toFixed(2);
  };

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onDismiss={() => {
        setTabBarVisible(true);
      }}
      backgroundStyle={{
        backgroundColor: colors.background,
        borderRadius: 24,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
      }}
      handleIndicatorStyle={{
        backgroundColor: '#DDDDDD',
        width: 40,
      }}
    >
      <BottomSheetView style={styles.contentContainer} >
        <View className="flex-1 px-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-2xl font-semibold text-quaternary">
              {selectedDomain?.domain}
            </Text>
            <Text className="text-xl font-bold text-quaternary">
              ${selectedDomain?.price && calculatePrice(selectedDomain.price, selectedPeriod)}
            </Text>
          </View>

          {/* Period Selection */}
          <View className="mb-6">
            <Text className="text-base font-semibold mb-2">Select Period</Text>
            <View className="flex-row flex-wrap gap-2">
              {Object.keys(PERIOD_MULTIPLIERS).map((period) => (
                <TouchableOpacity
                  key={period}
                  className={`px-4 py-2 rounded-full ${
                    selectedPeriod === period ? 'bg-primary' : 'bg-gray-200'
                  }`}
                  onPress={() => setSelectedPeriod(period)}
                >
                  <Text className={selectedPeriod === period ? 'text-black' : 'text-black'}>
                    {period}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Action Buttons */}
          <View className="flex-row gap-4">
            <TouchableOpacity
              className="flex-1 bg-gray-200 py-3 rounded-full"
              onPress={() => {
                console.log('Add to cart');
              }}
            >
              <Text className="text-center font-semibold">Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 bg-primary py-3 rounded-full"
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