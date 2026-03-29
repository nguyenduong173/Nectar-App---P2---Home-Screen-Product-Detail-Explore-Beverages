import { Feather, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { nectarColors, nectarFonts } from '@/constants/nectar-theme';

type Beverage = {
  title: string;
  subtitle: string;
  price: string;
  image: number;
};

const beverages: Beverage[] = [
  {
    title: 'Diet Coke',
    subtitle: '355ml, Price',
    price: '$1.99',
    image: require('@/assets/nectar/beverages/diet-coke.png'),
  },
  {
    title: 'Sprite Can',
    subtitle: '325ml, Price',
    price: '$1.50',
    image: require('@/assets/nectar/beverages/sprite.png'),
  },
  {
    title: 'Apple & Grape\nJuice',
    subtitle: '2L, Price',
    price: '$15.99',
    image: require('@/assets/nectar/beverages/grape-juice.png'),
  },
  {
    title: 'Orenge Juice',
    subtitle: '2L, Price',
    price: '$15.99',
    image: require('@/assets/nectar/beverages/mango-juice.png'),
  },
  {
    title: 'Coca Cola Can',
    subtitle: '325ml, Price',
    price: '$4.99',
    image: require('@/assets/nectar/beverages/cola-cola.png'),
  },
  {
    title: 'Pepsi Can',
    subtitle: '330ml, Price',
    price: '$4.99',
    image: require('@/assets/nectar/beverages/pepsi.png'),
  },
];

function BeverageCard({ item }: { item: Beverage }) {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardSubtitle}>{item.subtitle}</Text>

      <View style={styles.cardBottom}>
        <Text style={styles.cardPrice}>{item.price}</Text>
        <View style={styles.plusButton}>
          <Feather name="plus" size={22} color={nectarColors.white} />
        </View>
      </View>
    </View>
  );
}

export default function BeveragesScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={30} color="#181725" />
        </Pressable>

        <Text style={styles.headerTitle}>Beverages</Text>

        <Pressable>
          <Feather name="sliders" size={25} color="#181725" />
        </Pressable>
      </View>

      <FlatList
        data={beverages}
        numColumns={2}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => <BeverageCard item={item} />}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.homeIndicator} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    paddingHorizontal: 24,
  },
  header: {
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 14,
  },
  headerTitle: {
    color: '#181725',
    fontFamily: nectarFonts.bold,
    fontSize: 38 / 1.45,
    lineHeight: 38,
  },
  listContent: {
    paddingBottom: 24,
    gap: 14,
  },
  row: {
    justifyContent: 'space-between',
    gap: 14,
  },
  card: {
    width: '48%',
    minHeight: 250,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 18,
    backgroundColor: nectarColors.white,
    paddingHorizontal: 13,
    paddingVertical: 14,
  },
  cardImage: {
    width: '100%',
    height: 90,
    marginBottom: 20,
  },
  cardTitle: {
    color: '#181725',
    fontFamily: nectarFonts.semibold,
    fontSize: 30 / 1.65,
    lineHeight: 30,
    marginBottom: 2,
  },
  cardSubtitle: {
    color: '#7C7C7C',
    fontFamily: nectarFonts.medium,
    fontSize: 13,
    marginBottom: 22,
  },
  cardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardPrice: {
    color: '#181725',
    fontFamily: nectarFonts.bold,
    fontSize: 34 / 1.6,
  },
  plusButton: {
    width: 45,
    height: 45,
    borderRadius: 17,
    backgroundColor: nectarColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeIndicator: {
    alignSelf: 'center',
    width: 134,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#D7D7D7',
    marginTop: 8,
    marginBottom: 10,
  },
});
