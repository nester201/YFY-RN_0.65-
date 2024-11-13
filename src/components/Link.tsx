import React, { useMemo } from 'react';
import { colors } from '@theme';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import withMemo from '@hocs/withMemo';

type Props = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  text: string;
  fontSize?: number;
};

const Link = withMemo<Props>(({ onPress, text, style, fontSize = 18 }) => {
  const textStyles = useMemo(() => [styles.text, { fontSize }], [fontSize]);
  return (
    <TouchableOpacity onPress={onPress} accessibilityRole={'button'} style={style}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  text: {
    color: colors.linkColor,
    textAlign: 'center',
  },
});

export default Link;
