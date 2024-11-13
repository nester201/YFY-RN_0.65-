import React from 'react';
import { View, StyleSheet, ViewStyle, LayoutChangeEvent } from 'react-native';

import Bubble from '@components/Chat/Bubble';
import { IChatMessage } from '@interfaces/room';
import Avatar from '@components/Chat/Avatar';
import Day from './Day';
import SystemMessage from './SystemMessage';
import { IUser } from '@models/User';
import { isSameUser } from '@utils/chat';

const containerStyles: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'flex-end',
};

const styles = {
  left: StyleSheet.create({
    container: {
      ...containerStyles,
      justifyContent: 'flex-start',
    },
  }),
  right: StyleSheet.create({
    container: {
      ...containerStyles,
      justifyContent: 'flex-end',
    },
  }),
};

export interface MessageProps {
  key: any;
  position: 'left' | 'right';
  user: IUser;
  currentMessage?: IChatMessage;
  nextMessage?: IChatMessage;
  previousMessage?: IChatMessage;
  shouldUpdateMessage?(props: MessageProps, nextProps: MessageProps): boolean;
  onMessageLayout?(event: LayoutChangeEvent): void;
}

export default class Message extends React.Component<MessageProps> {
  shouldComponentUpdate(nextProps: MessageProps) {
    const next = nextProps.currentMessage!;
    const current = this.props.currentMessage!;
    const { previousMessage, nextMessage } = this.props;
    const nextPropsMessage = nextProps.nextMessage;
    const nextPropsPreviousMessage = nextProps.previousMessage;

    const shouldUpdate =
      (this.props.shouldUpdateMessage && this.props.shouldUpdateMessage(this.props, nextProps)) || false;

    return (
      next.sent !== current.sent ||
      next.received !== current.received ||
      next.pending !== current.pending ||
      next.createdAt !== current.createdAt ||
      next.text !== current.text ||
      next.image !== current.image ||
      next.video !== current.video ||
      next.audio !== current.audio ||
      previousMessage !== nextPropsPreviousMessage ||
      nextMessage !== nextPropsMessage ||
      shouldUpdate
    );
  }

  render() {
    const { currentMessage, nextMessage, onMessageLayout, position } = this.props;

    if (!currentMessage) {
      return null;
    }

    const sameUser = isSameUser(currentMessage, nextMessage);

    return (
      <View onLayout={onMessageLayout}>
        <Day {...this.props} />
        {currentMessage.system ? (
          <SystemMessage {...this.props} />
        ) : (
          <View
            style={[styles[position].container, { marginBottom: !nextMessage?.createdAt ? 15 : sameUser ? 5 : 10 }]}
          >
            {position === 'left' ? <Avatar {...this.props} /> : null}
            <Bubble {...this.props} />
          </View>
        )}
      </View>
    );
  }
}
