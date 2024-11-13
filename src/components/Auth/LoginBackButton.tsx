import React from 'react';
import { StyleSheet } from 'react-native';

import withMemo from '@hocs/withMemo';
import BackButton from '@components/HeaderButtons/BackButton';
import { useNavigationState } from '@react-navigation/native';

export const LoginBackButton = withMemo(() => {
  const index = useNavigationState(state => state.routes[state.index].state?.index);

  if (index) {
    return <BackButton style={styles.returnButton} size={26} />;
  }

  return null;
});

const styles = StyleSheet.create({
  returnButton: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
});
