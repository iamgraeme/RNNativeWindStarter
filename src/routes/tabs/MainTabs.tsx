import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import TopTabs from '@routes/tabs/TopTabs';
import {
  Cog6ToothIcon,
  Cog8ToothIcon,
  HomeIcon,
} from 'react-native-heroicons/solid';

type MainTabsProps = {};

const Tab = createBottomTabNavigator();

const MainTabs: FC<MainTabsProps> = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon size={26} color={color} />,
        }}
      />
      <Tab.Screen
        name="SettingsTabs"
        component={TopTabs}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Cog8ToothIcon size={26} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
