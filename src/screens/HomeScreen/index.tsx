import { useTheme } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';
import FancyButton from '@ui/FancyButton';
import LoadingIndicator from '@ui/LoadingIndicator';
import React, { FC, lazy, Suspense } from 'react';
import { View } from 'react-native';

type HomeScreenProps = {
  navigation: GenericNavigationProps;
};

const Products = lazy(() => import('@ui/Products'));

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const { colors } = useTheme();

  console.log('HomeScreen rendered');
  return (
    <View className="m-6 flex-1 justify-center items-center">
      <Suspense
        fallback={<LoadingIndicator color={colors.primary} size="large" />}
      >
        <Products />
      </Suspense>
      <FancyButton
        onPress={() => navigation.navigate('Cart')}
        buttonText="Open Cart"
      />
    </View>
  );
};

export default HomeScreen;
