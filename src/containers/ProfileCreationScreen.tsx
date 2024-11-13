import { TitleOrError } from '@components/Auth/TitleOrError';
import { errorActions } from '@store/error/errorActions';
import React, { useCallback, useMemo, useState } from 'react';
import { Image, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';

import UserSVG from '@assets/icons/user-default.svg';
import PlusSVG from '@assets/icons/plus-circle.svg';
import { colors } from '@theme';
import { ModalSelector } from '@components/ModalSelector/ModalSelector';
import GradientButton from '@components/GradientButton';
import { hp, wp } from '@utils/demension';
import Input from '@components/Input';
import Select from '@components/Select';
import { genderData } from '@models/SelectorData';
import { ICitySelect, IModalSelectorData } from '@interfaces';
import ModalSelectorItem from '@components/ModalSelector/ModalSelectorItem';
import useCamera from '@hooks/useCamera';
import useGallery from '@hooks/useGallery';
import CitySelect from '@components/CitySelect/CitySelect';
import { Image as ImageCropPicker } from 'react-native-image-crop-picker';

const cameraOptions = {
  width: 300,
  height: 300,
  cropping: true,
  cropperCircleOverlay: true,
  maxFiles: 1,
};

const ProfileCreationScreen: React.FC = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState<IModalSelectorData>();
  const [city, setCity] = useState<ICitySelect>();
  const [photo, setPhoto] = useState<ImageCropPicker>();
  const handleClickCamera = useCamera(setPhoto, cameraOptions);
  const handleClickLibrary = useGallery(setPhoto, cameraOptions);

  const photoImage = useMemo(() => photo && { uri: photo.sourceURL }, [photo]);

  const handleClickPhoto = useCallback(() => setModalVisible(true), []);

  const handleCloseModal = useCallback(() => setModalVisible(false), []);

  const handleClickActionButton = useCallback(() => {
    dispatch(errorActions.setErrorMessage('Something went wrong with load photo. Try again'));
  }, [dispatch]);

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView style={styles.container}>
          <Pressable style={styles.photoButton} onPress={handleClickPhoto}>
            {photoImage ? (
              <Image style={styles.photoImage} source={photoImage} accessibilityIgnoresInvertColors={false} />
            ) : (
              <View>
                <UserSVG />
                <PlusSVG style={styles.plusIcon} />
              </View>
            )}
          </Pressable>
          <TitleOrError>Enter your profile information</TitleOrError>
          <View style={styles.fieldsContainer}>
            <Input
              style={styles.inputField}
              onChangeText={setNickname}
              value={nickname}
              placeholder={'Nickname'}
              autoCorrect={false}
            />
            <Select
              style={styles.selectField}
              onSelect={setGender}
              value={gender?.title}
              placeholder={'Gender'}
              data={genderData}
            />
            <CitySelect city={city} onSelect={setCity} inputStyle={styles.selectField} />
          </View>
          <GradientButton onPress={handleClickActionButton} text={'Get started'} />
        </KeyboardAvoidingView>
      </SafeAreaView>
      <ModalSelector visible={modalVisible} handleClose={handleCloseModal}>
        <ModalSelectorItem text={'Photo'} handleClick={handleClickCamera} />
        <ModalSelectorItem text={'Select'} handleClick={handleClickLibrary} lastChild={true} />
      </ModalSelector>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(25),
    paddingVertical: hp(30),
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.authContainerBackground,
  },
  photoButton: {
    flex: 4,
    width: 113,
    height: 113,
    borderRadius: 57,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  photoImage: {
    width: 113,
    height: 113,
    borderRadius: 57,
    overflow: 'hidden',
  },
  fieldsContainer: {
    flex: 5,
  },
  inputField: {
    marginBottom: hp(26),
  },
  selectField: {
    marginBottom: hp(26),
  },
  plusIcon: {
    position: 'absolute',
    right: 2,
    bottom: 4,
    shadowColor: '#323247',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 50,
  },
});

export default ProfileCreationScreen;
