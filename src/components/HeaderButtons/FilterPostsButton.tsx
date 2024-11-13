import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import FilterSVG from '@assets/icons/filter.svg';
import { colors } from '@theme';
import withMemo from '@hocs/withMemo';
import { useNavigation } from '@react-navigation/native';
import { screeNames } from '@config/ScreenNames';

const FilterPostsButton = withMemo(() => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(screeNames.FILTER_POSTS);
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <FilterSVG fill={colors.headerIcon} width={20} />
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
});

export default FilterPostsButton;
