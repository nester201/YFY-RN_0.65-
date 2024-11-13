import React from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';

import ArrowSVG from '@assets/icons/arrow.svg';
import { colors } from '@theme';
import withMemo from '@hocs/withMemo';
import { useNavigation } from '@react-navigation/native';

type Props = {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  size?: number;
};

const BackButton = withMemo<Props>(({ onPress, size = 20, style }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={onPress || navigation.goBack} style={style}>
      <ArrowSVG width={size} height={size} fill={colors.headerIcon} />
    </Pressable>
  );
});

export default BackButton;
