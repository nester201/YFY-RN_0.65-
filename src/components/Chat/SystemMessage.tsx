import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IChatMessage } from '@interfaces/room';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 5,
    marginBottom: 10,
  },
  text: {
    color: '#cdcdcd',
    fontSize: 14,
    fontWeight: '300',
  },
});

export interface SystemMessageProps {
  currentMessage?: IChatMessage;
}

export default class SystemMessage extends React.Component<SystemMessageProps> {
  static defaultProps = {
    currentMessage: {
      system: false,
    },
  };

  render() {
    const { currentMessage } = this.props;
    if (currentMessage) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{currentMessage.text}</Text>
        </View>
      );
    }
    return null;
  }
}
