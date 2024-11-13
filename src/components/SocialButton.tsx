import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { config } from '@theme';
import withMemo from '@hocs/withMemo';

type Props = {
  Icon: React.FC<SvgProps>;
  size?: number;
};

const SocialButton = withMemo<Props>(({ Icon, size = config.socialIconSize }) => (
  <TouchableOpacity accessibilityRole={'button'}>
    <Icon width={size} height={size} />
  </TouchableOpacity>
));

export default SocialButton;
