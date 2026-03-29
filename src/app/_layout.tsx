import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { nectarColors } from '@/constants/nectar-theme';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    GilroyRegular: require('@/assets/nectar/fonts/Gilroy-Regular.otf'),
    GilroyMedium: require('@/assets/nectar/fonts/Gilroy-Medium.otf'),
    GilroySemibold: require('@/assets/nectar/fonts/Gilroy-Semibold.otf'),
    GilroyBold: require('@/assets/nectar/fonts/Gilroy-Bold.otf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={nectarColors.primary} />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ animation: 'none' }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: nectarColors.white,
  },
});
