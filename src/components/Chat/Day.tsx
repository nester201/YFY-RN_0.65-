import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import dayjs from 'dayjs';

import { IChatMessage } from '@interfaces/room';
import { isSameDay } from '@utils/chat';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: '#e0e0e0',
    marginBottom: 4,
    marginLeft: 6,
  },
  text: {
    color: '#999999',
    fontWeight: '300',
    fontSize: 14,
    marginHorizontal: 18,
  },
});

export interface DayProps {
  currentMessage?: IChatMessage;
  previousMessage?: IChatMessage;
}

export default class Day extends React.Component<DayProps> {
  render() {
    const { currentMessage, previousMessage } = this.props;

    if (currentMessage && !isSameDay(currentMessage, previousMessage)) {
      return (
        <View style={[styles.container, { marginBottom: currentMessage?.system ? 10 : 20 }]}>
          <View style={styles.line} />
          <Text style={styles.text}>{dayjs(currentMessage.createdAt).locale('en-EN').format('MMMM DD, YYYY')}</Text>
          <View style={styles.line} />
        </View>
      );
    }

    return null;
  }
}
