import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { IChatMessage } from '@interfaces/room';
import { IUser } from '@models/User';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 14,
    marginTop: 6.5,
    marginBottom: -6,
  },
  text: {
    fontSize: 10,
    color: '#999999',
  },
});

export interface UsernameProps {
  renderUsernameOnMessage?: boolean;
  currentMessage?: IChatMessage;
  user?: IUser;
}

export default class Username extends React.Component<UsernameProps> {
  static defaultProps = {
    renderUsernameOnMessage: false,
    currentMessage: {
      createdAt: null,
    },
    user: null,
  };

  render() {
    const { currentMessage, user } = this.props;

    if (this.props.renderUsernameOnMessage && currentMessage) {
      if (user && currentMessage.user.id === user.id) {
        return null;
      }
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{currentMessage.user.nickname}</Text>
        </View>
      );
    }

    return null;
  }
}
