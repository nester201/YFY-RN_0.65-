import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigationService = {
  navigate: (name: string, params?: any) => {
    navigationRef.current?.navigate(name, params);
  },

  reset: (name: string) => {
    navigationRef.current?.reset({
      index: 0,
      routes: [{ name }],
    });
  },
};
