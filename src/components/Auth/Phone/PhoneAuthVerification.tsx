import { phoneActions } from '@store/auth/phone/phoneActions';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import withMemo from '@hocs/withMemo';
import Input from '@components/Input';
import { TitleOrError } from '@components/Auth/TitleOrError';
import GradientButton from '@components/GradientButton';
import { AuthContainer } from '@components/Auth/AuthContainer';

export const PhoneAuthVerification = withMemo(() => {
  const [verificationCode, setVerificationCode] = useState('');
  const dispatch = useDispatch();

  const confirmCode = useCallback(() => {
    dispatch(phoneActions.verificationNumber(verificationCode));
  }, [dispatch, verificationCode]);

  return (
    <>
      <TitleOrError>We’ve send an SMS with an activation code to your phone</TitleOrError>
      <AuthContainer>
        <Input value={verificationCode} onChangeText={setVerificationCode} placeholder={'Verification code'} />
        <GradientButton text="Send" onPress={confirmCode} />
      </AuthContainer>
    </>
  );
});
