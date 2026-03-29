import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomTabs from '@/components/nectar/bottom-tabs';
import { nectarColors, nectarFonts } from '@/constants/nectar-theme';

type ProductCardItem = {
  title: string;
  subtitle: string;
  price: string;
  image: number;
  onPress?: () => void;
};

const exclusiveOffer: ProductCardItem[] = [
  {
    title: 'Organic Bananas',
    subtitle: '7pcs, Priceg',
    price: '$4.99',
    image: require('@/assets/nectar/home/bananas.png'),
  },
  {
    title: 'Red Apple',
    subtitle: '1kg, Priceg',
    price: '$4.99',
    image: require('@/assets/nectar/home/red-apple.png'),
    onPress: () => router.push('/product-detail'),
  },
];

const bestSelling: ProductCardItem[] = [
  {
    title: 'Bell Pepper Red',
    subtitle: '1kg, Priceg',
    price: '$4.99',
    image: require('@/assets/nectar/home/vegetables.png'),
  },
  {
    title: 'Ginger',
    subtitle: '250gm, Priceg',
    price: '$4.99',
    image: require('@/assets/nectar/home/rice.png'),
  },
];

const meatCards: ProductCardItem[] = [
  {
    title: 'Beef Bone',
    subtitle: '1kg, Priceg',
    price: '$4.99',
    image: require('@/assets/nectar/home/beef-bone.webp'),
  },
  {
    title: 'Broiler Chicken',
    subtitle: '1kg, Priceg',
    price: '$4.99',
    image: require('@/assets/nectar/home/whole-chicken.webp'),
  },
];

function SectionHeader({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeaderRow}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionAction}>See all</Text>
    </View>
  );
}

function ProductCard({ item }: { item: ProductCardItem }) {
  return (
    <Pressable
      onPress={item.onPress}
      style={({ pressed }) => [
        styles.productCard,
        item.onPress && pressed && { opacity: 0.9 },
      ]}>
      <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      <Text numberOfLines={1} style={styles.productTitle}>
        {item.title}
      </Text>
      <Text style={styles.productSubtitle}>{item.subtitle}</Text>

      <View style={styles.productBottomRow}>
        <Text style={styles.productPrice}>{item.price}</Text>
        <View style={styles.addButton}>
          <Feather name="plus" size={22} color={nectarColors.white} />
        </View>
      </View>
    </Pressable>
  );
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="dark" />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerBlock}>
          <MaterialCommunityIcons name="carrot" size={30} color={nectarColors.primary} />
          <View style={styles.locationRow}>
            <Ionicons name="location-sharp" size={18} color="#4C4F4D" />
            <Text style={styles.locationText}>Dhaka, Banassre</Text>
          </View>

          <View style={styles.searchBox}>
            <Ionicons name="search-outline" size={22} color="#181B19" />
            <TextInput
              placeholder="Search Store"
              placeholderTextColor="#7C7C7C"
              style={styles.searchInput}
            />
          </View>
        </View>

        <ImageBackground
          source={require('@/assets/nectar/home/slide-bg.png')}
          style={styles.banner}
          imageStyle={styles.bannerImage}
          resizeMode="cover">
          <Image source={require('@/assets/nectar/home/vegetables.png')} style={styles.bannerVeg} />
          <View style={styles.bannerTextBlock}>
            <Text style={styles.bannerTitle}>Fresh Vegetables</Text>
            <Text style={styles.bannerSubtitle}>Get Up To 40% OFF</Text>
          </View>
        </ImageBackground>

        <View style={styles.dotsRow}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <SectionHeader title="Exclusive Offer" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
          {exclusiveOffer.map((item) => (
            <ProductCard key={item.title} item={item} />
          ))}
        </ScrollView>

        <SectionHeader title="Best Selling" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
          {bestSelling.map((item) => (
            <ProductCard key={item.title} item={item} />
          ))}
        </ScrollView>

        <SectionHeader title="Groceries" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.groceryRow}>
          <View style={[styles.groceryChip, styles.groceryChipLeft]}>
            <Image source={require('@/assets/nectar/home/pulses.png')} style={styles.groceryChipImage} />
            <Text style={styles.groceryChipTitle}>Pulses</Text>
          </View>

          <View style={[styles.groceryChip, styles.groceryChipRight]}>
            <Image source={require('@/assets/nectar/home/rice.png')} style={styles.groceryChipImage} />
            <Text style={styles.groceryChipTitle}>Rice</Text>
          </View>
        </ScrollView>

        <View style={styles.meatGrid}>
          {meatCards.map((item) => (
            <ProductCard key={item.title} item={item} />
          ))}
        </View>
      </ScrollView>

      <BottomTabs activeTab="shop" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F2',
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingBottom: 170,
  },
  headerBlock: {
    alignItems: 'center',
    paddingTop: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 20,
    gap: 5,
  },
  locationText: {
    color: '#4C4F4D',
    fontFamily: nectarFonts.semibold,
    fontSize: 18,
    lineHeight: 18,
  },
  searchBox: {
    width: '100%',
    height: 52,
    borderRadius: 16,
    backgroundColor: '#EDEDED',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: nectarColors.text,
    fontFamily: nectarFonts.medium,
    fontSize: 14,
  },
  banner: {
    height: 116,
    borderRadius: 18,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 28,
    marginBottom: 10,
  },
  bannerImage: {
    borderRadius: 18,
  },
  bannerVeg: {
    width: 138,
    height: 90,
    marginLeft: 8,
    resizeMode: 'contain',
  },
  bannerTextBlock: {
    alignItems: 'flex-start',
  },
  bannerTitle: {
    fontFamily: nectarFonts.bold,
    fontSize: 18,
    color: nectarColors.text,
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontFamily: nectarFonts.semibold,
    fontSize: 14,
    color: '#53B175',
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginBottom: 18,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 20,
    backgroundColor: '#BDBDBD',
  },
  dotActive: {
    width: 18,
    backgroundColor: nectarColors.primary,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  sectionTitle: {
    color: '#181725',
    fontFamily: nectarFonts.bold,
    fontSize: 30 / 1.4,
  },
  sectionAction: {
    color: nectarColors.primary,
    fontFamily: nectarFonts.medium,
    fontSize: 16,
  },
  horizontalList: {
    gap: 14,
    paddingBottom: 8,
  },
  productCard: {
    width: 173,
    minHeight: 248,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 18,
    backgroundColor: nectarColors.white,
    paddingHorizontal: 14,
    paddingVertical: 15,
  },
  productImage: {
    width: '100%',
    height: 80,
    marginBottom: 24,
  },
  productTitle: {
    color: '#181725',
    fontFamily: nectarFonts.semibold,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 3,
  },
  productSubtitle: {
    color: '#7C7C7C',
    fontFamily: nectarFonts.medium,
    fontSize: 13,
    marginBottom: 22,
  },
  productBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productPrice: {
    color: '#181725',
    fontFamily: nectarFonts.bold,
    fontSize: 30 / 1.5,
  },
  addButton: {
    width: 45,
    height: 45,
    borderRadius: 17,
    backgroundColor: nectarColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  groceryRow: {
    gap: 14,
    marginBottom: 20,
  },
  groceryChip: {
    width: 248,
    height: 105,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  groceryChipLeft: {
    backgroundColor: '#F8EDE0',
  },
  groceryChipRight: {
    backgroundColor: '#E6F2E8',
  },
  groceryChipImage: {
    width: 66,
    height: 66,
    resizeMode: 'contain',
    marginRight: 16,
  },
  groceryChipTitle: {
    fontFamily: nectarFonts.semibold,
    color: '#3E423F',
    fontSize: 18,
  },
  meatGrid: {
    flexDirection: 'row',
    gap: 14,
  },
});
