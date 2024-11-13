import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { IChatMessage } from '@interfaces/room';
import Lightbox from '@components/Lightbox/Lightbox';

const styles = StyleSheet.create({
  lightbox: {
    flex: 1,
    borderRadius: 19,
    margin: 1,
    resizeMode: 'contain',
  },
  image: {
    margin: 1,
    borderRadius: 19,
    width: 170,
    height: 140,
    resizeMode: 'cover',
  },
});

export interface MessageImageProps {
  currentMessage?: IChatMessage;
}

export default class MessageImage extends React.Component<MessageImageProps> {
  static defaultProps = {
    currentMessage: {
      image: '',
    },
  };

  render() {
    const { currentMessage } = this.props;

    if (currentMessage && currentMessage.image) {
      const activeLightboxProps = {
        style: styles.lightbox,
      };

      const uri = { uri: currentMessage.image };

      return (
        <Lightbox activeProps={activeLightboxProps}>
          <Image style={styles.image} source={uri} accessibilityIgnoresInvertColors />
        </Lightbox>
      );
    }
    return null;
  }
}
