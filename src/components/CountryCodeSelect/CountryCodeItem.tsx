import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { colors } from '@theme';
import { ICountrySelect } from '@interfaces';
import withMemo from '@hocs/withMemo';

type Props = {
  item: ICountrySelect;
  handleClick: () => void;
};

const CountryCodeItem = withMemo<Props>(({ item, handleClick }) => (
  <Pressable style={styles.container} onPress={handleClick}>
    <Text style={styles.country}>{item.name}</Text>
    <Text style={styles.code}>+{item.code}</Text>
  </Pressable>
));

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '100%',
  },
  country: {
    fontSize: 16,
    color: colors.mainText,
    flexWrap: 'wrap',
    flex: 1,
  },
  code: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 1,
    lineHeight: 18,
    marginLeft: 20,
  },
});

export default CountryCodeItem;
