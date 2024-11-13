import React from 'react';

import { screeNames } from '@config/ScreenNames';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import EventsScreen from '@containers/EventsScreen';

const EventsStack = createStackNavigator();

const screenOptions = (): StackNavigationOptions => ({
  headerShown: true,
  headerTitleAlign: 'center',
});

const eventsOptions = (): StackNavigationOptions => ({
  title: 'Events',
});

const EventsNavigator: React.FC = () => (
  <EventsStack.Navigator initialRouteName={screeNames.EVENTS} screenOptions={screenOptions}>
    <EventsStack.Screen name={screeNames.EVENTS} component={EventsScreen} options={eventsOptions} />
  </EventsStack.Navigator>
);

export default EventsNavigator;
