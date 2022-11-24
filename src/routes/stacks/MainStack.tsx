import { createStackNavigator } from '@react-navigation/stack';
import ModalScreen from '@screens/ModalScreen';
import { FC } from 'react';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/solid';
import { useNavigation, useTheme } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';
import MainTabs from '@routes/tabs/MainTabs';

const MainStack = createStackNavigator();

const MainStackScreen: FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<GenericNavigationProps>();
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Root"
        options={{ headerShown: false }}
        component={MainTabs}
      />
      <MainStack.Screen
        name="Modal"
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
