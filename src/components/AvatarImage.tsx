import React from 'react';
import { Image, ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';
import { config, images } from '@theme';
import withMemo from '@hocs/withMemo';

type Props = {
  size?: number;
  source?: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
};

const AvatarImage = withMemo<Props>(({ source = images.userDefault, size = config.avatarSize, style }) => (
  <Image
    source={source}
    style={style}
    borderRadius={size / 2}
    width={size}
    height={size}
    accessibilityIgnoresInvertColors={false}
  />
));

export default AvatarImage;
