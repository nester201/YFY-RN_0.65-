import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import dayjs from 'dayjs';
import { IChatMessage } from '@interfaces/room';

const styles = StyleSheet.create({
  container: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    width: 36,
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    color: '#cdcdcd',
  },
});

export interface TimeProps {
  currentMessage?: IChatMessage;
}

export default class Time extends React.Component<TimeProps> {
  static defaultProps = {
    currentMessage: {
      createdAt: null,
    },
  };

  render() {
    const { currentMessage } = this.props;

    if (currentMessage && currentMessage.createdAt) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{dayjs(currentMessage.createdAt).locale('en-EN').format('H:mm')}</Text>
        </View>
      );
    }

    return null;
  }
}
