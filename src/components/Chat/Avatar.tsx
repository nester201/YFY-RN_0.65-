import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

import AvatarImage from '@components/AvatarImage';
import { IChatMessage } from '@interfaces/room';
import { isSameDay, isSameUser } from '@utils/chat';

const containerStyles: ViewStyle = {
  width: 36,
  height: 36,
};

const styles = StyleSheet.create({
  container: {
    ...containerStyles,
    marginRight: 10,
  },
});

export interface AvatarProps {
  currentMessage?: IChatMessage;
  nextMessage?: IChatMessage;
}

export default class Avatar extends React.Component<AvatarProps> {
  render() {
    const { currentMessage, nextMessage } = this.props;

    let showAvatar = true;

    if (currentMessage && isSameUser(currentMessage, nextMessage) && isSameDay(currentMessage, nextMessage)) {
      showAvatar = false;
    }

    const source = currentMessage?.user.photos[0] ? { uri: currentMessage?.user.photos[0] } : undefined;
    return <View style={styles.container}>{showAvatar && <AvatarImage source={source} size={36} />}</View>;
  }
}
