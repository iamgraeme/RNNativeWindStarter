import React, { FC } from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

type ProductCardProps = {
  title: string;
  price: number;
  image: string;
  category: string;
  index: number;
};

const numCols = 2;

const ProductCard: FC<ProductCardProps> = (props) => {
  const { title: name, price, category, image, index } = props;

  return (
    <View className={`flex-1 mb-4 ${index % numCols !== 0 ? 'ml-4' : 'ml-0'}`}>
      <View className="border border-gray-300 shadow bg-white rounded-xl overflow-hidden relative">
        <FastImage
          source={{ uri: image }}
          className="h-48"
          resizeMode={FastImage.resizeMode.contain}
        />
        <View className="bg-pink-200 flex-row inline-flex rounded-full py-1 px-2 absolute top-4 right-4">
          <Text className="text-pink-700 text-xs capitalize font-bold">
            {category}
          </Text>
        </View>
        <View className="p-4">
          <Text
            className="text-lg font-bold text-gray-400"
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            {name}
          </Text>
          <Text className="text-gray-500 text-sm font-bold mt-2">
            {price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
