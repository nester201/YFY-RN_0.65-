import { phoneActions } from '@store/auth/phone/phoneActions';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';

import withMemo from '@hocs/withMemo';
import Input from '@components/Input';
import { TitleOrError } from '@components/Auth/TitleOrError';
import GradientButton from '@components/GradientButton';
import { AuthContainer } from '@components/Auth/AuthContainer';
import CountryCodeSelect from '@components/CountryCodeSelect/CountryCodeSelect';
import { ICountrySelect } from '@interfaces';

export const PhoneAuth = withMemo(() => {
  const [countryCode, setCountryCode] = useState<ICountrySelect>();

  const [number, setNumber] = useState('257602453');
  const dispatch = useDispatch();

  const signInWithPhoneNumber = useCallback(() => {
    const phoneNumber = '+' + countryCode?.code + number;
    dispatch(phoneActions.authByPhone(phoneNumber));
  }, [dispatch, countryCode, number]);

  return (
    <>
      <TitleOrError>Enter your email and password</TitleOrError>
      <AuthContainer>
        <CountryCodeSelect country={countryCode} onSelect={setCountryCode} />
        <Input
          style={styles.phoneInput}
          value={number}
          onChangeText={setNumber}
          placeholder={'Enter phone number'}
          textContentType={'telephoneNumber'}
        />
        <GradientButton text="Send" onPress={signInWithPhoneNumber} />
      </AuthContainer>
    </>
  );
});

const styles = StyleSheet.create({
  phoneInput: {
    marginBottom: 58,
  },
});
