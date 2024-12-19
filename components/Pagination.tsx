import { View, Text } from 'react-native'
import React from 'react'


const Pagination = ({ items, paginationIndex}: { items: any, paginationIndex: number }) => {
  return (
    <View className='flex-row justify-center items-center gap-2'>
      {items.map((_: any, index: number) => (
        <View key={index} className={`w-2 h-2 rounded-full ${index === paginationIndex ? 'bg-gray-400' : 'bg-gray-800'}`} />
      ))}
    </View>
  )
}

export default Pagination