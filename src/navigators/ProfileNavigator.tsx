import React from 'react';

import { screeNames } from '@config/ScreenNames';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import BackButton from '@components/HeaderButtons/BackButton';
import SettingsButton from '@components/HeaderButtons/SettingsButton';
import ProfileScreen from '@containers/ProfileScreen';
import SettingsScreen from '@containers/SettingsScreen';
import { colors } from '@theme';

const ProfileStack = createStackNavigator();

const screenOptions = (): StackNavigationOptions => ({
  headerShown: true,
  headerTitleAlign: 'center',
  cardStyle: { backgroundColor: colors.secondaryContainerBackground },
});

const renderProfileHeaderRight = () => <SettingsButton />;

const profileOptions = (): StackNavigationOptions => ({
  title: 'Profile',
  headerRight: renderProfileHeaderRight,
  headerRightContainerStyle: {
    paddingRight: 14,
  },
});

const renderSettingsHeaderLeft = () => <BackButton />;

const settingsOptions = (): StackNavigationOptions => ({
  title: 'Settings',
  headerLeft: renderSettingsHeaderLeft,
  headerLeftContainerStyle: {
    paddingLeft: 14,
  },
});

const ProfileNavigator: React.FC = () => (
  <ProfileStack.Navigator initialRouteName={screeNames.PROFILE} screenOptions={screenOptions}>
    <ProfileStack.Screen name={screeNames.PROFILE} component={ProfileScreen} options={profileOptions} />
    <ProfileStack.Screen name={screeNames.SETTINGS} component={SettingsScreen} options={settingsOptions} />
  </ProfileStack.Navigator>
);

export default ProfileNavigator;
