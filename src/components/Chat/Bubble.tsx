import React from 'react';
import { StyleSheet, View, ViewStyle, Pressable } from 'react-native';
import BackgroundGradient from '@components/BackgroundGradient';
import { IChatMessage } from '@interfaces/room';
import Time from './Time';
import Status from './Status';
import Username from '@components/Chat/Username';
import MessageText from '@components/Chat/MessageText';
import MessageImage from '@components/Chat/MessageImage';
import MessageAudio from '@components/Chat/MessageAudio';

const containerStyles: ViewStyle = {
  flex: 1,
};

const wrapperStyles: ViewStyle = {
  borderRadius: 20,
  minHeight: 20,
  justifyContent: 'flex-end',
  overflow: 'hidden',
};

const styles = {
  left: StyleSheet.create({
    container: {
      ...containerStyles,
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
    wrapper: {
      ...wrapperStyles,
      backgroundColor: '#ffffff',
      borderWidth: 0.5,
      borderColor: '#e0e0e0',
      marginRight: 84,
    },
  }),
  right: StyleSheet.create({
    container: {
      ...containerStyles,
      alignItems: 'flex-end',
      flexDirection: 'row-reverse',
    },
    wrapper: {
      ...wrapperStyles,
      marginLeft: 84,
    },
  }),
  content: StyleSheet.create({
    info: {
      marginLeft: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
    },
  }),
};

export interface BubbleProps {
  position: 'left' | 'right';
  currentMessage?: IChatMessage;
  onLongPress?(context?: any, message?: any): void;
}

export default class Bubble extends React.Component<BubbleProps> {
  static defaultProps = {
    position: 'left',
    currentMessage: {
      text: null,
      createdAt: null,
      image: null,
    },
    onLongPress: () => undefined,
  };

  onLongPress = () => {
    const { currentMessage } = this.props;
    if (currentMessage && currentMessage.text) {
      // TODO open popup with options
    }
  };

  render() {
    const { position } = this.props;

    return (
      <View style={styles[position].container}>
        <View style={styles[position].wrapper}>
          <Pressable onLongPress={this.onLongPress}>
            <BackgroundGradient disabled={position === 'left'}>
              <Username {...this.props} />
              <MessageText {...this.props} />
              <MessageImage {...this.props} />
              <MessageAudio {...this.props} />
            </BackgroundGradient>
          </Pressable>
        </View>
        <View style={styles.content.info}>
          <Time {...this.props} />
          <Status {...this.props} />
        </View>
      </View>
    );
  }
}
