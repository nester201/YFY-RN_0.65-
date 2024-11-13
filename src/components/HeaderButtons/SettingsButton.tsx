import React, { useCallback } from 'react';
import { Pressable } from 'react-native';

import { screeNames } from '@config/ScreenNames';
import GearSVG from '@assets/icons/gear.svg';
import { colors } from '@theme';
import withMemo from '@hocs/withMemo';
import { useNavigation } from '@react-navigation/native';

const SettingsButton = withMemo(() => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.navigate(screeNames.SETTINGS);
  }, [navigation]);

  return (
    <Pressable onPress={handlePress}>
      <GearSVG width={25} height={25} fill={colors.headerIcon} />
    </Pressable>
  );
});

export default SettingsButton;
