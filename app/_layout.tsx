import { useFonts } from "expo-font";
import { router, Stack, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "../global.css";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { UIProvider } from "../context/UIContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";
import { ClerkProvider, ClerkLoaded, useAuth } from '@clerk/clerk-expo'
import { tokenCache } from '../cache'
import { View } from "react-native";
import { ActivityIndicator } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env'
  );
}

function RootLayout() {
  const [loaded] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (!isLoaded) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (isSignedIn && inAuthGroup) {
      router.replace('/(tabs)');
    } else if (!isSignedIn && !inAuthGroup) {
      router.replace('/(auth)/sign-in');
    }
  }, [isLoaded, isSignedIn, segments]);

  if (!loaded || !isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!isSignedIn ? (
        <Stack.Screen
          name="(auth)"
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
              contentStyle: {
                backgroundColor: Colors.background,
              },
            }}
          />
          <Stack.Screen
            name="profile"
            options={{
              headerTitle: "",
              headerBackTitle: "",
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: Colors.background,
              },
              headerLeft: () => (
                <TouchableOpacity onPress={router.back}>
                  <Ionicons name="arrow-back" size={24} color="gray" />
                </TouchableOpacity>
              ),
              contentStyle: {
                backgroundColor: Colors.background,
              },
            }}
          />
        </>
      )}
      <Stack.Screen name="+not-found" options={{ presentation: 'modal' }} />
    </Stack>
  );
}

const RootLayoutNav = () => {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <UIProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
              <RootLayout />
              <StatusBar
                style="light"
                backgroundColor="#000000"
                translucent={false}
              />
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </UIProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
};

export default RootLayoutNav;
