import {Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';

type FancyButtonProps = {
  onPress: () => void;
  buttonText?: string;
};

const FancyButton: FC<FancyButtonProps> = ({onPress, buttonText}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="border-2 border-black bg-emerald-500 p-4 rounded-md w-full items-center justify-center">
      <Text className="font-bold">{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default FancyButton;
