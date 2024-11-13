import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '@theme';
import { ICitySelect } from '@interfaces';
import withMemo from '@hocs/withMemo';

interface Props {
  item: ICitySelect;
  handleClick: () => void;
}

const CitySelectItem = withMemo<Props>(({ item, handleClick }) => (
  <Pressable style={styles.container} onPress={handleClick}>
    <Text>
      <Text style={styles.city}>{item.data.city || item.data.settlement}</Text>
      &nbsp;&nbsp;&nbsp;
      <Text style={styles.country}>{item.data.country}</Text>
    </Text>
  </Pressable>
));

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  city: {
    fontSize: 16,
    color: colors.mainText,
  },
  country: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 1,
  },
});

export default CitySelectItem;
