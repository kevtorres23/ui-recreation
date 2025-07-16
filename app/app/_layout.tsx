import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import React from 'react';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import '../global.css';
import '../index.css';
import Ionicons from '@react-native-vector-icons/ionicons';

import { useColorScheme } from '@/hooks/useColorScheme';
import { HeaderTitle } from '@react-navigation/elements';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <React.Fragment>
      <StatusBar style='auto' />
      <Stack>
        <Stack.Screen name='index' options={{
          headerShown: false,
        }}></Stack.Screen>

        <Stack.Screen name='home' options={{
          headerShown: false,
        }}></Stack.Screen>

        <Stack.Screen name='fastfood' options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: "white",
          headerTitle: "Fast Food",
          headerTitleAlign: 'center',
          headerRight: () => {
            return <Ionicons name="cart" size={24} color="white" />
          }
        }}></Stack.Screen>

        <Stack.Screen name='restaurants' options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: "black",
          headerTitle: "Restaurants",
          headerTitleAlign: 'center',
          headerRight: () => {
            return <Ionicons name="cart" size={24} color="black" />
          }
        }}></Stack.Screen>
      </Stack>
    </React.Fragment>
  );
}
