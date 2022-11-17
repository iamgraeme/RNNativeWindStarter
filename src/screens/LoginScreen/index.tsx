import FancyButton from '@ui/FancyButton';
import React, {FC} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Text, TextInput, View} from 'react-native';
type LoginScreenProps = {};

const LoginScreen: FC<LoginScreenProps> = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      emailAddress: '',
      password: '',
    },
  });
  const onSubmit = data => console.log(data);
  return (
    <View className="flex-1 justify-center items-center m-6">
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            className="border-2 bg-white p-4 border-emerald-500 w-full rounded-md mb-4"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Email Address"
          />
        )}
        name="emailAddress"
      />
      {errors.emailAddress && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            className="border-2 bg-white p-4 border-emerald-500 w-full rounded-md mb-4"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Password"
            secureTextEntry={true}
          />
        )}
        name="password"
      />

      <FancyButton buttonText="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default LoginScreen;
