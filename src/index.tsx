import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import MainStackScreen from "@routes/stacks/MainStack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import colors from "tailwindcss/colors";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.pink[500],
    background: colors.white,
    card: colors.white,
    text: colors.slate[900],
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
