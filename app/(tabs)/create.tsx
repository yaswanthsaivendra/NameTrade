import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const create = () => {
  const [activeTab, setActiveTab] = useState<'listings' | 'offers'>('listings');
  
  return (
    <View className='flex-1 bg-background pt-12 px-4'>
      {/* Add Domain Banner */}
      <TouchableOpacity className='bg-primary/10 p-6 rounded-xl mb-6'>
        <View className='flex-row items-center justify-between'>
          <View className='flex-1 mr-4'>
            <Text className='text-white text-2xl font-bold mb-2'>List Your Domain</Text>
            <Text className='text-gray-400'>Turn your domains into assets. List them for sale in minutes.</Text>
          </View>
          <TouchableOpacity className='bg-primary w-12 h-12 rounded-full items-center justify-center'>
            <Text className='text-white text-2xl font-bold'>+</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {/* Toggle Tabs */}
      <View className='flex-row mb-6'>
        <TouchableOpacity 
          className={`flex-1 items-center py-3 border-b-2 ${activeTab === 'listings' ? 'border-primary' : 'border-gray-700'}`}
          onPress={() => setActiveTab('listings')}
        >
          <Text className={activeTab === 'listings' ? 'text-primary font-bold' : 'text-gray-400 font-bold'}>My Listings</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className={`flex-1 items-center py-3 border-b-2 ${activeTab === 'offers' ? 'border-primary' : 'border-gray-700'}`}
          onPress={() => setActiveTab('offers')}
        >
          <Text className={activeTab === 'offers' ? 'text-primary font-bold' : 'text-gray-400 font-bold'}>My Offers</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        className='flex-1'
        contentContainerStyle={{
          gap: 12,
          paddingBottom: 100
        }}
      >
        {/* My Listings */}
        {activeTab === 'listings' && (
          <>
            <View className='bg-primary/5 p-4 rounded-xl'>
              <View className='flex-row justify-between items-center mb-3'>
                <Text className='text-quaternary text-xl font-bold'>crypto.eth</Text>
                <View className='bg-green-500/20 px-3 py-1 rounded'>
                  <Text className='text-green-500'>Active</Text>
                </View>
              </View>

              <View className='flex-row justify-between items-center'>
                <Text className='text-gray-400'>Listed Price</Text>
                <Text className='text-quaternary font-bold text-lg'>$5,000/year</Text>
              </View>
            </View>

            <View className='bg-primary/5 p-4 rounded-xl'>
              <View className='flex-row justify-between items-center mb-3'>
                <Text className='text-quaternary text-xl font-bold'>defi.io</Text>
                <View className='bg-yellow-500/20 px-3 py-1 rounded'>
                  <Text className='text-yellow-500'>Pending Sale</Text>
                </View>
              </View>

              <View className='flex-row justify-between items-center'>
                <Text className='text-gray-400'>Listed Price</Text>
                <Text className='text-quaternary font-bold text-lg'>$3,000/year</Text>
              </View>
            </View>
          </>
        )}

        {/* My Offers Section */}
        {activeTab === 'offers' && (
          <View className='bg-primary/5 p-4 rounded-xl'>
            <View className='flex-row justify-between items-center mb-3'>
              <Text className='text-quaternary text-xl font-bold'>meta.eth</Text>
              <View className='bg-blue-500/20 px-3 py-1 rounded'>
                <Text className='text-blue-500'>Pending</Text>
              </View>
            </View>

            <View className='flex-row justify-between items-center mb-4'>
              <Text className='text-gray-400'>Your Offer</Text>
              <Text className='text-quaternary font-bold text-lg'>$12,000</Text>
            </View>

            <View className='border-t border-gray-700 pt-3'>
              <Text className='text-white font-bold mb-2'>Status</Text>
              <Text className='text-gray-400'>Waiting for seller response</Text>
            </View>
          </View>
        )}

      </ScrollView>
    </View>
  )
}

export default create
