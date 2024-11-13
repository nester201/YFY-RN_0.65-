import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IChatMessage } from '@interfaces/room';
import WarningSVG from '@assets/icons/warning.svg';
import EyeSVG from '@assets/icons/eye.svg';
import TimeLeftSVG from '@assets/icons/time-left.svg';
import { IUser } from '@models/User';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 10,
  },
  tickIcon: {
    marginLeft: 4,
  },
});

export interface StatusProps {
  currentMessage?: IChatMessage;
  user?: IUser;
}

export default class Status extends React.Component<StatusProps> {
  static defaultProps = {
    currentMessage: {
      createdAt: null,
    },
    user: null,
  };

  render() {
    const { currentMessage, user } = this.props;

    if (currentMessage && user && currentMessage.user && currentMessage.user.id !== user.id) {
      return null;
    }

    if (currentMessage && (currentMessage.error || currentMessage.viewed || currentMessage.pending)) {
      return (
        <View style={styles.container}>
          {!!currentMessage.error && <WarningSVG width={16} height={16} fill={'#ee7373'} style={styles.tickIcon} />}
          {!!currentMessage.viewed && <EyeSVG width={16} height={16} fill={'#cdcdcd'} style={styles.tickIcon} />}
          {!!currentMessage.pending && <TimeLeftSVG width={16} height={16} fill={'#cdcdcd'} style={styles.tickIcon} />}
        </View>
      );
    }
    return null;
  }
}
