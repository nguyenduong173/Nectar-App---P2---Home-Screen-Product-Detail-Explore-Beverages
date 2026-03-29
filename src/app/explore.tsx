import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomTabs from '@/components/nectar/bottom-tabs';
import { nectarFonts } from '@/constants/nectar-theme';

type CategoryItem = {
  title: string;
  image: number;
  backgroundColor: string;
  borderColor: string;
  onPress?: () => void;
};

const categories: CategoryItem[] = [
  {
    title: 'Frash Fruits\n& Vegetable',
    image: require('@/assets/nectar/explore/fruits_and_vegetable.png'),
    backgroundColor: '#EAF4ED',
    borderColor: '#70C990',
  },
  {
    title: 'Cooking Oil\n& Ghee',
    image: require('@/assets/nectar/explore/oil-and-ghee.png'),
    backgroundColor: '#F8F3EC',
    borderColor: '#F8A44C',
  },
  {
    title: 'Meat & Fish',
    image: require('@/assets/nectar/explore/meat-and-fish.png'),
    backgroundColor: '#FDEFEA',
    borderColor: '#F7A593',
  },
  {
    title: 'Bakery & Snacks',
    image: require('@/assets/nectar/explore/bakery-and-snacks.png'),
    backgroundColor: '#F4ECF7',
    borderColor: '#D3B0E0',
  },
  {
    title: 'Dairy & Eggs',
    image: require('@/assets/nectar/explore/dairy-and-eggs.png'),
    backgroundColor: '#F8F6EA',
    borderColor: '#FDE598',
  },
  {
    title: 'Beverages',
    image: require('@/assets/nectar/explore/beverage.png'),
    backgroundColor: '#EDF4F9',
    borderColor: '#B7DFF5',
    onPress: () => router.push('/beverages'),
  },
  {
    title: 'Frash Fruits\n& Vegetable',
    image: require('@/assets/nectar/explore/fruits_and_vegetable.png'),
    backgroundColor: '#EFEEFB',
    borderColor: '#C7BFFF',
  },
  {
    title: 'Cooking Oil\n& Ghee',
    image: require('@/assets/nectar/explore/oil-and-ghee.png'),
    backgroundColor: '#FDEEF5',
    borderColor: '#F7B3D4',
  },
];

function CategoryCard({ item }: { item: CategoryItem }) {
  return (
    <Pressable
      onPress={item.onPress}
      style={({ pressed }) => [
        styles.categoryCard,
        {
          backgroundColor: item.backgroundColor,
          borderColor: item.borderColor,
          opacity: item.onPress && pressed ? 0.9 : 1,
        },
      ]}>
      <Image source={item.image} style={styles.categoryImage} resizeMode="contain" />
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </Pressable>
  );
}

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="dark" />

      <Text style={styles.pageTitle}>Find Products</Text>

      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={24} color="#181B19" />
        <TextInput placeholder="Search Store" placeholderTextColor="#7C7C7C" style={styles.searchInput} />
      </View>

      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        columnWrapperStyle={styles.gridRow}
        contentContainerStyle={styles.gridContent}
        renderItem={({ item }) => <CategoryCard item={item} />}
        showsVerticalScrollIndicator={false}
      />

      <BottomTabs activeTab="explore" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    paddingHorizontal: 24,
  },
  pageTitle: {
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 20,
    color: '#181725',
    fontFamily: nectarFonts.bold,
    fontSize: 38 / 1.5,
    lineHeight: 38 / 1.2,
  },
  searchBox: {
    width: '100%',
    height: 51,
    borderRadius: 15,
    backgroundColor: '#EDEDED',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: '#181725',
    fontFamily: nectarFonts.medium,
    fontSize: 16,
  },
  gridContent: {
    paddingBottom: 170,
    gap: 15,
  },
  gridRow: {
    justifyContent: 'space-between',
    gap: 15,
  },
  categoryCard: {
    width: '48%',
    height: 190,
    borderRadius: 18,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 12,
    paddingTop: 26,
  },
  categoryImage: {
    width: 120,
    height: 86,
    marginBottom: 24,
  },
  categoryTitle: {
    color: '#181725',
    fontFamily: nectarFonts.semibold,
    fontSize: 38 / 1.9,
    textAlign: 'center',
    lineHeight: 30,
  },
});
