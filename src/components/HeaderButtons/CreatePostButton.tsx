import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import PlusSVG from '@assets/icons/plus.svg';
import { colors } from '@theme';
import withMemo from '@hocs/withMemo';
import { useNavigation } from '@react-navigation/native';
import { screeNames } from '@config/ScreenNames';

const CreatePostButton = withMemo(() => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(screeNames.POST_CREATION);
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <PlusSVG fill={colors.headerIcon} width={20} />
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
});

export default CreatePostButton;
