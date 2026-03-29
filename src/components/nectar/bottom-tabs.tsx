import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { nectarColors, nectarFonts } from '@/constants/nectar-theme';

type BottomTabsProps = {
  activeTab: 'shop' | 'explore';
};

export default function BottomTabs({ activeTab }: BottomTabsProps) {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={styles.wrap}>
      <View style={styles.bar}>
        <Pressable style={styles.tabItem} onPress={() => router.replace('/')}>
          <MaterialCommunityIcons
            name="storefront-outline"
            size={22}
            color={activeTab === 'shop' ? nectarColors.primary : nectarColors.text}
          />
          <Text style={[styles.label, activeTab === 'shop' && styles.activeLabel]}>Shop</Text>
        </Pressable>

        <Pressable style={styles.tabItem} onPress={() => router.replace('/explore')}>
          <Ionicons
            name="search-outline"
            size={22}
            color={activeTab === 'explore' ? nectarColors.primary : nectarColors.text}
          />
          <Text style={[styles.label, activeTab === 'explore' && styles.activeLabel]}>Explore</Text>
        </Pressable>

        <View style={styles.tabItem}>
          <MaterialCommunityIcons name="cart-outline" size={22} color={nectarColors.text} />
          <Text style={styles.label}>Cart</Text>
        </View>

        <View style={styles.tabItem}>
          <Ionicons name="heart-outline" size={22} color={nectarColors.text} />
          <Text style={styles.label}>Favourite</Text>
        </View>

        <View style={styles.tabItem}>
          <Ionicons name="person-outline" size={22} color={nectarColors.text} />
          <Text style={styles.label}>Account</Text>
        </View>
      </View>
      <View style={{ height: insets.bottom, backgroundColor: nectarColors.white }} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  bar: {
    height: 84,
    backgroundColor: nectarColors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -4 },
    elevation: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 6,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    minWidth: 56,
  },
  label: {
    fontFamily: nectarFonts.medium,
    color: '#181725',
    fontSize: 12,
  },
  activeLabel: {
    color: nectarColors.primary,
  },
});
