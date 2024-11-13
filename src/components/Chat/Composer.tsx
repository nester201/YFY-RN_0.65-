import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    fontSize: 16,
    lineHeight: 20,
    color: '#333333',
    backgroundColor: 'rgba(224, 224, 224, .15)',
    borderWidth: 1,
    borderRadius: 17,
    borderColor: 'rgba(102, 102, 102, .15)',
    paddingTop: 5.5,
    paddingBottom: 6.5,
    paddingHorizontal: 16,
  },
});

export interface ComposerProps {
  text?: string;
  textInputAutoFocus?: boolean;
  keyboardAppearance?: TextInputProps['keyboardAppearance'];
  disableComposer?: boolean;
  onTextChanged?(text: string): void;
}

export default class Composer extends React.Component<ComposerProps> {
  static defaultProps = {
    text: '',
    textInputProps: null,
    disableComposer: false,
    keyboardAppearance: 'default',
    onTextChanged: () => undefined,
  };

  onChangeText = (text: string) => {
    this.props.onTextChanged!(text);
  };

  render() {
    return (
      <TextInput
        accessible
        placeholder={'Message...'}
        placeholderTextColor={'#999999'}
        multiline={true}
        editable={!this.props.disableComposer}
        onChangeText={this.onChangeText}
        style={styles.textInput}
        value={this.props.text}
        enablesReturnKeyAutomatically
        underlineColorAndroid="transparent"
      />
    );
  }
}
