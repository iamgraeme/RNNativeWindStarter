import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FC } from 'react';
import FancyButton from '@ui/FancyButton';
import { GenericNavigationProps } from '@routes/types';

type HomeScreenProps = {
  navigation: GenericNavigationProps;
};

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View className="m-6 flex-1 justify-center items-center">
      <Text className="text-orange-500 text-2xl font-bold mb-6">
        HomeScreen
      </Text>
      <FancyButton
        onPress={() => navigation.navigate('Modal')}
        buttonText="Open Modal"
      />
    </View>
  );
};

export default HomeScreen;
