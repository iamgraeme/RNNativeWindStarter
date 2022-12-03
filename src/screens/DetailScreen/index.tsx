import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { GenericNavigationProps } from '@routes/types';

type DetailScreenProps = {
  navigation: GenericNavigationProps;
  route: any;
};

const DetailScreen: FC<DetailScreenProps> = ({ route, navigation }) => {
  const { product } = route.params;
  navigation.setOptions({ title: product.title });
  return (
    <View className="m-4">
      <Text className="text-2xl font-bold">{product.title}</Text>
      <Text className="text-gray-500 text-sm font-bold mt-2">
        {product.price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </Text>
    </View>
  );
};

export default DetailScreen;
