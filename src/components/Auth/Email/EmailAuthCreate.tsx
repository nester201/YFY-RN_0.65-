import { emailActions } from '@store/auth/email/emailActions';
import React, { useCallback, useState } from 'react';
import withMemo from '@hocs/withMemo';
import Input from '@components/Input';
import GradientButton from '@components/GradientButton';
import { useDispatch } from 'react-redux';
import { AuthContainer } from '../AuthContainer';
import { TitleOrError } from '../TitleOrError';

export const EmailAuthCreate = withMemo(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const handleClickRegister = useCallback(() => {
    dispatch(emailActions.createUserByEmail(email, password, confirmPassword));
  }, [dispatch, email, password, confirmPassword]);

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
        <Input
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder={'Confirm Password'}
          textContentType={'password'}
          secureTextEntry
        />
        <GradientButton text={'Register'} onPress={handleClickRegister} />
      </AuthContainer>
    </>
  );
});
