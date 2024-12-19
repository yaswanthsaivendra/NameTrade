import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import colors from '@/constants/colors'
interface SliderItemProps {
    item: any
    index: number
}

const windowWidth = Dimensions.get('window').width;

const SliderItem = ({ item, index }: SliderItemProps) => {
    return (
        <View className="flex-row items-center justify-center" style={{ width: windowWidth }}>
            <View className="bg-gray-800 p-4 rounded-xl w-72">
                <Text className="text-tertiary text-xl font-semibold">{item.type}</Text>
                <Text className="text-primary text-xl font-bold mt-2">{item.domain}</Text>
                <Text className="text-quaternary mt-2">Price: {item.price}</Text>
                <Text className="text-quaternary">Owner: {item.owner}</Text>
            </View>
        </View>
    )
}

export default SliderItem