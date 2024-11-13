import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import { v4 as uuidv4 } from 'uuid';

import MicSVG from '@assets/icons/mic.svg';
import SendSVG from '@assets/icons/send-button.svg';
import { IChatMessage } from '@interfaces/room';
import BackgroundGradient from '@components/BackgroundGradient';
import { Recorder } from '@react-native-community/audio-toolkit';

const styles = StyleSheet.create({
  container: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
});

export interface SendProps {
  text?: string;
  disabled?: boolean;
  onSend?(messages: Partial<IChatMessage> | Partial<IChatMessage>[]): void;
}

export default class Send extends React.Component<SendProps> {
  recorderFileName = '';
  recorder: Recorder | null = null;

  static defaultProps = {
    text: '',
    disabled: false,
    onSend: () => undefined,
  };

  constructor(props: SendProps) {
    super(props);

    this.reloadRecorder();
  }

  reloadRecorder() {
    if (this.recorder) {
      this.recorder.destroy();
    }

    this.recorderFileName = uuidv4() + '.aac';

    this.recorder = new Recorder(this.recorderFileName, {
      bitrate: 128000,
      sampleRate: 22050,
      channels: 2,
      quality: 'low',
      format: 'aac',
      encoder: 'aac',
    });
  }

  handleOnPress = () => {
    const { text, onSend } = this.props;
    if (text && onSend) {
      onSend({ text: text.trim() });
    }
  };

  handleOnPressIn = async () => {
    await this.recorder?.record();
  };

  handleOnPressOut = async () => {
    await this.recorder?.stop();
    const storagePath = 'audio/' + this.recorderFileName;
    const reference = storage().ref(storagePath);
    const pathToFile = `${utils.FilePath.DOCUMENT_DIRECTORY}/${this.recorderFileName}`;
    await reference.putFile(pathToFile);
    this.reloadRecorder();
  };

  render() {
    const { text, disabled } = this.props;

    if (text && text.trim().length > 0) {
      return (
        <Pressable onPress={this.handleOnPress} disabled={disabled}>
          <BackgroundGradient style={styles.container}>
            <SendSVG width={32} height={32} fill={'#ffffff'} />
          </BackgroundGradient>
        </Pressable>
      );
    } else {
      return (
        <Pressable onLongPress={this.handleOnPressIn} onPressOut={this.handleOnPressOut} disabled={disabled}>
          <BackgroundGradient style={styles.container}>
            <MicSVG width={18} height={18} fill={'#ffffff'} />
          </BackgroundGradient>
        </Pressable>
      );
    }
  }
}
