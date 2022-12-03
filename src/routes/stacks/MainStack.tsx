import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import ModalScreen from '@screens/ModalScreen';
import DetailScreen from '@screens/DetailScreen';
import { FC } from 'react';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/solid';
import { useNavigation, useTheme } from '@react-navigation/native';
import MainTabs from '@routes/tabs/MainTabs';

export type MainStackParamList = {
  DetailScreen: { product: Product } | undefined;
};

const MainStack = createStackNavigator();

const MainStackScreen: FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  return (
    <MainStack.Navigator screenOptions={{ headerBackTitle: 'Back' }}>
      <MainStack.Screen
        name="Root"
        options={{ headerShown: false }}
        component={MainTabs}
      />
      <MainStack.Screen name="DetailScreen" component={DetailScreen} />
      <MainStack.Screen
        name="Cart"
        component={ModalScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: () => null,
          presentation: 'modal',
          headerRight: () => (
            <TouchableOpacity
              className="mr-4"
              onPress={() => navigation.goBack()}
            >
              <XMarkIcon color={colors.text} />
            </TouchableOpacity>
          ),
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
