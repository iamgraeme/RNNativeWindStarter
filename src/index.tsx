import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import MainStackScreen from '@routes/stacks/MainStack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {useState} from 'react';
import colors from 'tailwindcss/colors';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.emerald[500],
    background: colors.emerald[100],
    card: colors.emerald[500],
    text: colors.white,
    border: colors.slate[200],
    notification: colors.red[500],
  },
};

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={theme}>
        <MainStackScreen />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
