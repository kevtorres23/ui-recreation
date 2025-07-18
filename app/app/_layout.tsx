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

        <Stack.Screen name='conference' options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: "white",
          headerTitle: "Conference",
          headerTitleAlign: 'center',
          headerRight: () => {
            return <Ionicons name="cart" size={24} color="white" />
          }
        }}></Stack.Screen>

        <Stack.Screen name='confirm_reservation' options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: "white",
          headerTitle: "Confirm Reservation",
          headerTitleAlign: 'center',
        }}></Stack.Screen>

        <Stack.Screen name='medium_search' options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: "black",
          headerTitle: "Medium Search",
          headerTitleAlign: 'center',
        }}></Stack.Screen>

        <Stack.Screen name='checkout' options={{
          headerShown: true,
          headerTintColor: "black",
          headerTitle: "Checkout",
          headerTitleAlign: 'center',
        }}></Stack.Screen>

        <Stack.Screen name='order_successful' options={{
          headerShown: true,
          headerTintColor: "black",
          headerTitle: "Succesful Order",
          headerTitleAlign: 'center',
        }}></Stack.Screen>

        <Stack.Screen name='jumbo_burger' options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: "black",
          headerTitle: "Jumbo Burger",
          headerTitleAlign: 'center',
          headerRight: () => {
            return <Ionicons name="cart" size={24} color="black" />
          }
        }}></Stack.Screen>

        <Stack.Screen name='reservation' options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: "white",
          headerTitle: "Reservation",
          headerTitleAlign: 'center',
        }}></Stack.Screen>

        <Stack.Screen name='track_order' options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: "black",
          headerTitle: "Track Order",
          headerTitleAlign: 'center',
        }}></Stack.Screen>

        <Stack.Screen name='categories' options={{
          headerShown: true,
          headerTintColor: "black",
          headerTitle: "Categories",
          headerTitleAlign: 'center',
        }}></Stack.Screen>

        <Stack.Screen name='order_received' options={{
          headerShown: true,
          headerTintColor: "black",
          headerTitle: "Order Delivered!",
          headerTitleAlign: 'center',
        }}></Stack.Screen>

        <Stack.Screen name='find_location' options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: "black",
          headerTitle: "Find Location",
          headerTitleAlign: 'center',
        }}></Stack.Screen>

        <Stack.Screen name='userprofile' options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: "black",
          headerTitle: "Profile",
          headerTitleAlign: 'center',
        }}></Stack.Screen>

      </Stack>
    </React.Fragment>
  );
}
