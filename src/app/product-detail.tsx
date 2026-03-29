import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import NectarButton from '@/components/nectar/nectar-button';
import { nectarColors, nectarFonts } from '@/constants/nectar-theme';

export default function ProductDetailScreen() {
  const insets = useSafeAreaInsets();
  const reviewStars = [1, 2, 3, 4, 5];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="dark" />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.heroBox}>
          <View style={styles.heroHeader}>
            <Pressable onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={30} color="#181725" />
            </Pressable>

            <Pressable>
              <Ionicons name="share-outline" size={28} color="#181725" />
            </Pressable>
          </View>

          <Image source={require('@/assets/nectar/home/apple.png')} style={styles.heroImage} resizeMode="contain" />

          <View style={styles.dotsRow}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        <View style={styles.contentBlock}>
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.title}>Naturel Red Apple</Text>
              <Text style={styles.subtitle}>1kg, Price</Text>
            </View>
            <Ionicons name="heart-outline" size={34} color="#7C7C7C" />
          </View>

          <View style={styles.qtyRow}>
            <View style={styles.qtyControl}>
              <Ionicons name="remove" size={30} color="#B3B3B3" />
              <View style={styles.qtyBox}>
                <Text style={styles.qtyText}>1</Text>
              </View>
              <Ionicons name="add" size={29} color={nectarColors.primary} />
            </View>

            <Text style={styles.mainPrice}>$4.99</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Product Detail</Text>
            <Ionicons name="chevron-down" size={26} color="#181725" />
          </View>
          <Text style={styles.detailText}>
            Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May Be Good For Your
            Heart. As Part Of A Healthful And Varied Diet.
          </Text>

          <View style={styles.divider} />

          <View style={styles.rowItem}>
            <Text style={styles.rowTitle}>Nutritions</Text>
            <View style={styles.nutritionRight}>
              <Text style={styles.badge}>100gr</Text>
              <Ionicons name="chevron-forward" size={24} color="#181725" />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.rowItem}>
            <Text style={styles.rowTitle}>Review</Text>
            <View style={styles.reviewRight}>
              <View style={styles.stars}>
                {reviewStars.map((star) => (
                  <Ionicons key={star} name="star" size={18} color="#F3603F" />
                ))}
              </View>
              <Ionicons name="chevron-forward" size={24} color="#181725" />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.bottomActionWrap, { paddingBottom: insets.bottom + 10 }]}>
        <NectarButton title="Add To Basket" onPress={() => {}} />
        <View style={styles.homeIndicator} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  scrollContent: {
    paddingBottom: 170,
  },
  heroBox: {
    backgroundColor: '#EDEDED',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingHorizontal: 24,
    paddingBottom: 18,
  },
  heroHeader: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heroImage: {
    width: '100%',
    height: 300,
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
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
  contentBlock: {
    paddingHorizontal: 24,
    paddingTop: 22,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  title: {
    color: '#181725',
    fontFamily: nectarFonts.bold,
    fontSize: 40 / 1.6,
    lineHeight: 36,
    marginBottom: 8,
  },
  subtitle: {
    color: '#7C7C7C',
    fontFamily: nectarFonts.medium,
    fontSize: 17,
  },
  qtyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  qtyControl: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  qtyBox: {
    width: 46,
    height: 46,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: nectarColors.white,
  },
  qtyText: {
    color: '#181725',
    fontFamily: nectarFonts.semibold,
    fontSize: 18,
  },
  mainPrice: {
    color: '#181725',
    fontFamily: nectarFonts.bold,
    fontSize: 44 / 1.75,
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E2E2',
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#181725',
    fontFamily: nectarFonts.semibold,
    fontSize: 38 / 1.9,
  },
  detailText: {
    color: '#7C7C7C',
    fontFamily: nectarFonts.medium,
    fontSize: 16,
    lineHeight: 41 / 1.9,
    marginBottom: 20,
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  rowTitle: {
    color: '#181725',
    fontFamily: nectarFonts.semibold,
    fontSize: 38 / 1.9,
  },
  nutritionRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  badge: {
    fontFamily: nectarFonts.semibold,
    color: '#7C7C7C',
    fontSize: 15,
    backgroundColor: '#EBEBEB',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 3,
    overflow: 'hidden',
  },
  reviewRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stars: {
    flexDirection: 'row',
    gap: 2,
  },
  bottomActionWrap: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  homeIndicator: {
    alignSelf: 'center',
    width: 134,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#D7D7D7',
    marginTop: 12,
  },
});
