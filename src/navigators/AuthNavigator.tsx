import * as React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { LoginScreen } from '@containers/LoginScreen';
import ProfileCreationScreen from '@containers/ProfileCreationScreen';
import { screeNames } from '@config/ScreenNames';

const AuthStack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const profileCreationScreenOptions = (): StackNavigationOptions => ({
  headerShown: true,
  headerTitleAlign: 'center',
  title: 'Profile Creation',
  headerStyle: {
    shadowColor: 'transparent',
    elevation: 0,
  },
  headerTitleStyle: {
    fontWeight: 'normal',
    fontSize: 18,
  },
  headerLeft: undefined,
});

const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator initialRouteName={screeNames.LOGIN} screenOptions={screenOptions}>
      <AuthStack.Screen name={screeNames.LOGIN} component={LoginScreen} />
      <AuthStack.Screen
        name={screeNames.PROFILE_CREATION}
        component={ProfileCreationScreen}
        options={profileCreationScreenOptions}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
