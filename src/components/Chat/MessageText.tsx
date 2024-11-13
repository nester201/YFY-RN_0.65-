import React from 'react';
import { Linking, StyleSheet, TextStyle } from 'react-native';

import ParsedText from 'react-native-parsed-text';
import Communications from 'react-native-communications';
import { IChatMessage } from '@interfaces/room';
import { colors } from '@theme';

const WWW_URL_PATTERN = /^www\./i;

const textStyle: TextStyle = {
  fontSize: 16,
  lineHeight: 20,
  marginTop: 8,
  marginBottom: 9,
  marginLeft: 14,
  marginRight: 14,
};

const styles = {
  left: StyleSheet.create({
    text: {
      color: colors.mainText,
      ...textStyle,
    },
    link: {
      color: colors.mainText,
      textDecorationLine: 'underline',
    },
  }),
  right: StyleSheet.create({
    text: {
      color: '#ffffff',
      ...textStyle,
    },
    link: {
      color: '#ffffff',
      textDecorationLine: 'underline',
    },
  }),
};

export interface MessageTextProps {
  position: 'left' | 'right';
  currentMessage?: IChatMessage;
  parsePatterns?(linkStyle: TextStyle): any;
}

export default class MessageText extends React.Component<MessageTextProps> {
  static defaultProps = {
    position: 'left',
    currentMessage: {
      text: '',
    },
    parsePatterns: () => [],
  };

  shouldComponentUpdate(nextProps: MessageTextProps) {
    return (
      !!this.props.currentMessage &&
      !!nextProps.currentMessage &&
      this.props.currentMessage.text !== nextProps.currentMessage.text
    );
  }

  onUrlPress = (url: string) => {
    if (WWW_URL_PATTERN.test(url)) {
      this.onUrlPress(`http://${url}`);
    } else {
      Linking.canOpenURL(url).then(supported => {
        if (!supported) {
          console.error('No handler for URL:', url);
        } else {
          Linking.openURL(url);
        }
      });
    }
  };

  onPhonePress = (phone: string) => {
    // TODO open popup with options
    console.log(phone);
  };

  onEmailPress = (email: string) => Communications.email([email], null, null, null, null);

  render() {
    const { currentMessage } = this.props;

    if (currentMessage && currentMessage.text) {
      return (
        <ParsedText
          style={styles[this.props.position].text}
          parse={[
            ...this.props.parsePatterns!(styles[this.props.position].link),
            { type: 'url', style: styles[this.props.position].link, onPress: this.onUrlPress },
            { type: 'phone', style: styles[this.props.position].link, onPress: this.onPhonePress },
            { type: 'email', style: styles[this.props.position].link, onPress: this.onEmailPress },
          ]}
        >
          {this.props.currentMessage!.text}
        </ParsedText>
      );
    }

    return null;
  }
}
