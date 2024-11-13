import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '@theme';
import { StyleProp, View, ViewStyle } from 'react-native';
import withMemo from '@hocs/withMemo';

type Props = {
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

const gradientStart = { x: 0, y: 0 };
const gradientEnd = { x: 1, y: 0 };
const gradientColors = [colors.primary, colors.secondary];

const BackgroundGradient = withMemo<Props>(({ disabled, style, children }) =>
  disabled ? (
    <View style={style}>{children}</View>
  ) : (
    <LinearGradient start={gradientStart} end={gradientEnd} colors={gradientColors} style={style}>
      {children}
    </LinearGradient>
  )
);

export default BackgroundGradient;
