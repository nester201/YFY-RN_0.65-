import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { screeNames } from '@config/ScreenNames';
import { navigationRef } from '@services/NavigationService';
import LoggedInNavigator from './LoggedInNavigator';
import AuthNavigator from './AuthNavigator';
import RoomScreen from '@containers/RoomScreen';
import BackButton from '@components/HeaderButtons/BackButton';
import { colors } from '@theme';

const RootStack = createStackNavigator();

const loggedInOptions = (): StackNavigationOptions => ({
  headerShown: false,
});

const authOptions = (): StackNavigationOptions => ({
  headerShown: false,
});

const renderBackButton = () => <BackButton />;

const roomOptions = ({ route }: any): StackNavigationOptions => ({
  title: route.params.user.nickname,
  headerLeft: renderBackButton,
  headerLeftContainerStyle: {
    paddingLeft: 12,
  },
  cardStyle: { backgroundColor: colors.mainContainerBackground },
});

const AppNavigator: React.FC = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // Handle user state changes
  const handleAuthStateChanged = useCallback(
    (authUser: FirebaseAuthTypes.User | null) => {
      setUser(authUser);
      if (initializing) setInitializing(false);
    },
    [initializing]
  );

  useEffect(() => {
    return auth().onAuthStateChanged(handleAuthStateChanged); // unsubscribe on unmount
  }, [handleAuthStateChanged]);

  if (initializing) return null; // TODO create loader

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator initialRouteName={user ? screeNames.LOGGED_IN : screeNames.AUTH}>
        <RootStack.Screen name={screeNames.AUTH} component={AuthNavigator} options={authOptions} />
        <RootStack.Screen name={screeNames.LOGGED_IN} component={LoggedInNavigator} options={loggedInOptions} />
        <RootStack.Screen name={screeNames.ROOM} component={RoomScreen} options={roomOptions} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
