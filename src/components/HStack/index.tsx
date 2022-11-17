import {View, Text} from 'react-native';
import React, {FC} from 'react';

type HStackProps = {
  children: React.ReactNode;
  alignItems: 'flex-start' | 'center' | 'flex-end';
  justifyContent: 'flex-start' | 'center' | 'flex-end';
};

const HStack: FC<HStackProps> = ({alignItems, justifyContent, children}) => {
  return <View className="flex flex-row">{children}</View>;
};

export default HStack;
