import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen';
import ModalScreen from '@screens/ModalScreen';
import {FC} from 'react';
import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {XMarkIcon} from 'react-native-heroicons/solid';
import {useNavigation, useTheme} from '@react-navigation/native';
import {GenericNavigationProps} from '@routes/types';

const MainStack = createStackNavigator();

const MainStackScreen: FC = () => {
  const {colors} = useTheme();
  const navigation = useNavigation<GenericNavigationProps>();
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS,
        }}
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
              onPress={() => navigation.goBack()}>
              <XMarkIcon color={colors.background} />
            </TouchableOpacity>
          ),
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
