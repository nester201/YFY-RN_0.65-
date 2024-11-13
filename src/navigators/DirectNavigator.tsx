import React from 'react';

import { screeNames } from '@config/ScreenNames';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import DirectScreen from '@containers/DirectScreen';

const DirectStack = createStackNavigator();

const screenOptions = (): StackNavigationOptions => ({
  headerShown: true,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 'normal',
    fontSize: 18,
  },
  headerStyle: {
    shadowColor: 'transparent',
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  cardStyle: { backgroundColor: '#fff' },
});

const directOptions = (): StackNavigationOptions => ({
  title: 'Direct',
});

const DirectNavigator: React.FC = () => (
  <DirectStack.Navigator initialRouteName={screeNames.DIRECT} screenOptions={screenOptions}>
    <DirectStack.Screen name={'DirectScreen'} component={DirectScreen} options={directOptions} />
  </DirectStack.Navigator>
);

export default DirectNavigator;
