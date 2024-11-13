import React from 'react';
import { StyleSheet, View } from 'react-native';
import Composer from './Composer';
import Actions from './Actions';

import Send from './Send';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderTopWidth: 0.5,
    borderTopColor: '#e0e0e0',
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  composerContainer: {
    position: 'relative',
    flex: 1,
    marginRight: 16,
  },
  primary: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

export default class InputToolbar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.primary}>
          <View style={styles.composerContainer}>
            <Composer {...this.props} />
            <Actions {...this.props} />
          </View>
          <Send {...this.props} />
        </View>
      </View>
    );
  }
}
