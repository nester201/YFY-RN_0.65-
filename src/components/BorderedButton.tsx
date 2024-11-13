import React, { useMemo } from 'react';
import { colors } from '@theme';
import { SvgProps } from 'react-native-svg';
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import withMemo from '@hocs/withMemo';

type Props = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  text: string;
  Icon?: React.FC<SvgProps>;
  widthIcon?: number;
  heightIcon?: number;
};

const BorderedButton = withMemo<Props>(({ onPress, text, style, Icon, widthIcon, heightIcon }) => {
  const buttonContainerStyles = useMemo(() => [styles.buttonContainer, style], [style]);
  return (
    <Pressable onPress={onPress} style={buttonContainerStyles}>
      {Icon && (
        <View style={styles.iconContainer}>
          <Icon width={widthIcon} height={heightIcon} />
        </View>
      )}
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    borderColor: colors.borderButtonColor,
    borderWidth: 1,
    borderStyle: 'solid',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 2,
  },
  iconContainer: {
    position: 'absolute',
    left: 18,
    height: 30,
    width: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.borderButtonTextColor,
    fontSize: 18,
  },
});

export default BorderedButton;
