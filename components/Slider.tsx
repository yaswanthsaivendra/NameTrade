import React, { useRef } from "react";
import { FlatList, View, ViewToken } from "react-native";
import SliderItem from "./SliderItem";
import Pagination from "./Pagination";
import { useState } from "react";

const Slider = ({ data }: { data: any }) => {
  const [paginationIndex, setPaginationIndex] = useState(0);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems !== undefined && viewableItems[0].index !== null) {
      setPaginationIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  return (
    <View className="flex flex-col items-center justify-center gap-3">
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <Pagination items={data} paginationIndex={paginationIndex} />
    </View>
  );
};

export default Slider;
