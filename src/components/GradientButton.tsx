import React from 'react';
import { Text, StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '@theme';
import BackgroundGradient from '@components/BackgroundGradient';
import withMemo from '@hocs/withMemo';

type Props = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  text: string;
};

const GradientButton = withMemo<Props>(({ onPress, text, style }) => (
  <TouchableOpacity onPress={onPress} accessibilityRole={'button'} style={style}>
    <BackgroundGradient style={styles.buttonContainer}>
      <Text style={styles.text}>{text}</Text>
    </BackgroundGradient>
  </TouchableOpacity>
));

const styles = StyleSheet.create({
  text: {
    color: colors.buttonText,
    fontSize: 18,
    textAlign: 'center',
  },
  buttonContainer: {
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 2,
  },
});

export default GradientButton;
