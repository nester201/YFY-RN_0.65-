import React, { useCallback } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import ImageSVG from '@assets/icons/image.svg';
import CameraSVG from '@assets/icons/camera.svg';
import useCamera from '@hooks/useCamera';
import useGallery from '@hooks/useGallery';
import { IChatMessage } from '@interfaces/room';
import storage from '@react-native-firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { Image } from 'react-native-image-crop-picker';

const cameraOptions = {
  maxFiles: 5,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    paddingRight: 10,
  },
  button: {
    height: '100%',
    paddingHorizontal: 6,
    justifyContent: 'center',
  },
});

interface ActionsProps {
  text?: string;
  onSend?(messages: Partial<IChatMessage> | Partial<IChatMessage>[]): void;
}

const Actions: React.FC<ActionsProps> = ({ text, onSend }) => {
  const handleSendPhoto = useCallback(
    async (photo: Image) => {
      onSend && onSend({ image: photo.path });
      const fileName = `${uuidv4()}.${photo.mime.split('/')[1]}`;
      const storagePath = 'images/' + fileName;
      const reference = storage().ref(storagePath);
      await reference.putFile(photo.path);
    },
    [onSend]
  );

  const handleClickCamera = useCamera(handleSendPhoto, cameraOptions);
  const handleClickLibrary = useGallery(handleSendPhoto, cameraOptions);

  if (!text) {
    return (
      <View style={styles.container}>
        <Pressable onPress={handleClickCamera} style={styles.button}>
          <CameraSVG width={23} height={18} fill={'#666666'} />
        </Pressable>
        <Pressable onPress={handleClickLibrary} style={styles.button}>
          <ImageSVG width={18} height={18} fill={'#666666'} />
        </Pressable>
      </View>
    );
  }

  return null;
};

export default Actions;
