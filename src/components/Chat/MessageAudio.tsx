import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IChatMessage } from '@interfaces/room';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export interface MessageAudioProps {
  currentMessage?: IChatMessage;
}

export default class MessageAudio extends React.Component<MessageAudioProps> {
  static defaultProps = {
    currentMessage: {
      audio: '',
    },
  };

  render() {
    const { currentMessage } = this.props;

    if (currentMessage && currentMessage.audio) {
      return (
        <View style={styles.container}>
          <Text>Audio</Text>
        </View>
      );
    }
    return null;
  }
}
