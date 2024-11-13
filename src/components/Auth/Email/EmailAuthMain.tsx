import { emailActions } from '@store/auth/email/emailActions';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import withMemo from '@hocs/withMemo';
import Input from '@components/Input';
import Link from '@components/Link';
import GradientButton from '@components/GradientButton';
import { TitleOrError } from '@components/Auth/TitleOrError';
import { AuthContainer } from '@components/Auth/AuthContainer';
import { LinksContainer } from './LinksContainer';
import { screeNames } from '@config/ScreenNames';
import { useNavigation } from '@react-navigation/native';

export const EmailAuthMain = withMemo(() => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleClickCreateAccount = useCallback(() => {
    navigation.navigate(screeNames.EMAIL_AUTH_CREATE);
  }, [navigation]);

  const handleClickResetPassword = useCallback(() => {
    navigation.navigate(screeNames.EMAIL_AUTH_RESET);
  }, [navigation]);

  const handleClickLogin = useCallback(() => {
    dispatch(emailActions.authByEmail(email, password));
  }, [dispatch, email, password]);

  return (
    <>
      <TitleOrError>Enter your email and password</TitleOrError>
      <AuthContainer>
        <Input value={email} onChangeText={setEmail} placeholder={'Email'} textContentType={'emailAddress'} />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder={'Password'}
          textContentType={'password'}
          secureTextEntry
        />
        <LinksContainer>
          <Link onPress={handleClickCreateAccount} text={'Create account'} fontSize={16} />
          <Link onPress={handleClickResetPassword} text={'Forgot password?'} fontSize={16} />
        </LinksContainer>
        <GradientButton text={'Login'} onPress={handleClickLogin} />
      </AuthContainer>
    </>
  );
});
