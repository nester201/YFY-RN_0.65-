import React, { useMemo } from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

import { colors } from '@theme';
import withMemo from '@hocs/withMemo';

const Input = withMemo<TextInputProps>(({ style, ...props }) => {
  const textInputStyles = useMemo(() => [styles.textInput, style], [style]);

  return <TextInput {...props} style={textInputStyles} placeholderTextColor={colors.placeholder} />;
});

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors.inputBackground,
    fontSize: 18,
    borderRadius: 5,
    borderColor: colors.border,
    borderStyle: 'solid',
    borderWidth: 1,
    paddingHorizontal: 20,
    height: 50,
    color: colors.mainText,
  },
});

export default Input;
