import React from 'react'
import { FlatList, View } from 'react-native'
import SliderItem from './SliderItem'

const Slider = ({data}: {data: any}) => {
  return (
   <View>
        <FlatList
            data={data}
            renderItem={({item, index}) => <SliderItem item={item} index={index} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
        />
   </View>  
  )
}

export default Slider