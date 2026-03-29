import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';

import { nectarColors, nectarFonts } from '@/constants/nectar-theme';

type NectarButtonProps = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  style?: ViewStyle;
  disabled?: boolean;
};

export default function NectarButton({
  title,
  onPress,
  backgroundColor = nectarColors.primary,
  style,
  disabled = false,
}: NectarButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor, opacity: pressed || disabled ? 0.92 : 1 },
        style,
      ]}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 67,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: nectarColors.white,
    fontFamily: nectarFonts.semibold,
    fontSize: 18,
    lineHeight: 18,
  },
});
