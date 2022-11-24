import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { FC } from 'react';
import ProfileScreen from '@screens/ProfileScreen';
import SettingsScreen from '@screens/SettingsScreen';

type TopTabsProps = {};

const Tab = createMaterialTopTabNavigator();

const TopTabs: FC<TopTabsProps> = () => {
  return (
    <Tab.Navigator initialRouteName="Profile">
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TopTabs;
