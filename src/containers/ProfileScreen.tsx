import { userActions } from '@store/user/userActions';
import { userSelectors } from '@store/user/userSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, StyleSheet } from 'react-native';

import ProfileInfo from '@components/ProfileInfo';

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const user = useSelector(userSelectors.getUser);

  useEffect(() => {
    dispatch(userActions.fetchUser());
  }, [dispatch]);

  return <SafeAreaView style={styles.container}>{user && <ProfileInfo user={user} />}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileScreen;
