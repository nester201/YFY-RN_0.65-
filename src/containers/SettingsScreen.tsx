import { authActions } from '@store/auth/authActions';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Text, View } from 'react-native';

import GradientButton from '@components/GradientButton';

const SettingsScreen = () => {
  const dispatch = useDispatch();

  const signOut = useCallback(() => {
    dispatch(authActions.logout());
  }, [dispatch]);

  return (
    <View>
      <Text>Settings page</Text>
      <GradientButton text="Sign out" onPress={signOut} />
    </View>
  );
};

export default SettingsScreen;
