import React from 'react';
import { StyleSheet, View } from 'react-native';

import withMemo from '@hocs/withMemo';

type Props = {};

export const AuthContainer = withMemo<Props>(({ children }) => {
  return <View style={styles.actionsContainer}>{children}</View>;
});

const styles = StyleSheet.create({
  actionsContainer: {
    minHeight: 228,
    maxHeight: 228,
    justifyContent: 'space-between',
  },
});
