import { googleActions } from '@store/auth/google/googleActions';
import React, { useCallback } from 'react';
import BorderedButton from '@components/BorderedButton';
import GoogleSVG from '@assets/icons/social/google.svg';
import FacebookSVG from '@assets/icons/social/facebook.svg';
import { useDispatch } from 'react-redux';
import withMemo from '@hocs/withMemo';
import { screeNames } from '@config/ScreenNames';
import { AuthContainer } from '@components/Auth/AuthContainer';
import { TitleOrError } from './TitleOrError';
import { useNavigation } from '@react-navigation/native';

export const ChoiceAuth = withMemo(() => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleClickEmail = useCallback(() => {
    navigation.navigate(screeNames.EMAIL_AUTH_MAIN);
  }, [navigation]);

  const handleClickPhone = useCallback(() => {
    navigation.navigate(screeNames.PHONE_AUTH);
  }, [navigation]);

  const handleClickGoogle = useCallback(() => {
    dispatch(googleActions.authByGoogle());
  }, [dispatch]);

  const handleClickFacebook = useCallback(() => {
    navigation.navigate(screeNames.PROFILE_CREATION);
  }, [navigation]);

  return (
    <>
      <TitleOrError>Choose authentication method</TitleOrError>
      <AuthContainer>
        <BorderedButton onPress={handleClickEmail} text={'Email and password'} />
        <BorderedButton onPress={handleClickPhone} text={'Phone number'} />
        <BorderedButton onPress={handleClickGoogle} text={'Google'} Icon={GoogleSVG} widthIcon={25} heightIcon={25} />
        <BorderedButton
          onPress={handleClickFacebook}
          text={'Facebook'}
          Icon={FacebookSVG}
          widthIcon={30}
          heightIcon={30}
        />
      </AuthContainer>
    </>
  );
});
