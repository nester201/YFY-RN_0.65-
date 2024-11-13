import React from 'react';
import { StyleSheet, View } from 'react-native';

import withMemo from '@hocs/withMemo';

type Props = {};

export const LinksContainer = withMemo<Props>(({ children }) => {
  return <View style={styles.linksContainer}>{children}</View>;
});

const styles = StyleSheet.create({
  linksContainer: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
