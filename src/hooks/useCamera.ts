import ImagePicker, { CommonOptions, Image } from 'react-native-image-crop-picker';
import { logger } from '@utils/logger';
import { useCallback } from 'react';

const useCamera = (setPhoto: (photo: Image) => void, config: CommonOptions = {}) =>
  useCallback(
    () =>
      ImagePicker.openCamera({
        mediaType: 'photo',
        includeBase64: true,
        ...config,
      })
        .then(data => {
          setPhoto(data);
          console.log(data);
        })
        .catch(error => logger.warning(error)),
    [setPhoto, config]
  );

export default useCamera;
