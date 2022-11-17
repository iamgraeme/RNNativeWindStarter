import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import LoginScreen from '@screens/LoginScreen';
import {FC} from 'react';
import * as React from 'react';

const AuthStack = createStackNavigator();

const AuthStackScreen: FC = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
