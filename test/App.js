import * as React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DebitCard from "./src/screen/DebitCard";
import SpendingLimit from "./src/screen/SpendingLimit";
import { useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="debitCard" component={DebitCard} options={{ headerShown: false }} />
        <Stack.Screen name="spendingLimit" component={SpendingLimit} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;