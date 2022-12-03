import React, { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';

type LoadingIndicatorProps = {
  size?: 'small' | 'large';
  color?: string;
};

const LoadingIndicator: FC<LoadingIndicatorProps> = ({ color, size }) => {
  return (
    <View className="h-full w-full flex items-center justify-center">
      <ActivityIndicator color={color} size={size} />
    </View>
  );
};

export default LoadingIndicator;
