import { emailActions } from '@store/auth/email/emailActions';
import React, { useCallback, useState } from 'react';
import withMemo from '@hocs/withMemo';
import Input from '@components/Input';
import GradientButton from '@components/GradientButton';
import { useDispatch } from 'react-redux';
import { TitleOrError } from '@components/Auth/TitleOrError';
import { AuthContainer } from '@components/Auth/AuthContainer';

export const EmailAuthReset = withMemo(() => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleClickSend = useCallback(() => {
    dispatch(emailActions.resetEmailPassword(email));
  }, [dispatch, email]);

  return (
    <>
      <TitleOrError>Enter your email and password</TitleOrError>
      <AuthContainer>
        <Input value={email} onChangeText={setEmail} placeholder={'Email'} textContentType={'emailAddress'} />
        <GradientButton text={'Send'} onPress={handleClickSend} />
      </AuthContainer>
    </>
  );
});
