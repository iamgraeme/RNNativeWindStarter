import { useQuery } from '@tanstack/react-query';
import ProductCard from '@ui/ProductCard';
import { fetchProducts } from '@utils/api';
import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';

const Products = () => {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const [windowHeight, setWindowHeight] = useState(100);

  return (
    <View
      onLayout={(e) => {
        const { height } = e.nativeEvent.layout;
        setWindowHeight(height);
      }}
      className="flex-1 w-full"
    >
      <FlatList
        ListHeaderComponent={ListHeader}
        className="mt-4"
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          console.log(item);
          return <ProductCard product={item} index={index} />;
        }}
        numColumns={2}
        windowSize={windowHeight || 100}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      />
    </View>
  );
};

export default Products;

const ListHeader = () => {
  return (
    <View className="flex flex-row items-center justify-between pb-2 mb-2 bg-white">
      <Text className="font-bold text-xl">Our Latest Products...</Text>
    </View>
  );
};
