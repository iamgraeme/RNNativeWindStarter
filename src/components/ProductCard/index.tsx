import React, { FC } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Product } from '@utils/types';
import { MainStackParamList } from '@routes/stacks/MainStack';

type ProductCardProps = {
  product: Product;
};

const numCols = 2;

const ProductCard: FC<ProductCardProps> = (props) => {
  const { product, index } = props;
  const { title: name, price, category, image } = product;
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  return (
    <View className={`flex-1 mb-4 ${index % numCols !== 0 ? 'ml-4' : 'ml-0'}`}>
      <TouchableOpacity
        className="border border-gray-300 shadow bg-white rounded-xl overflow-hidden relative"
        onPress={() => navigation.navigate('DetailScreen', { product })}
      >
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
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
