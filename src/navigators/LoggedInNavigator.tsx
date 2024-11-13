import React from 'react';
import { screeNames } from '@config/ScreenNames';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import DialogSVG from '@assets/icons/dialog.svg';
import HomeSVG from '@assets/icons/home.svg';
import MatcherSVG from '@assets/icons/matcher.svg';
import ProfileSVG from '@assets/icons/profile.svg';
import DirectNavigator from './DirectNavigator';
import EventsNavigator from './EventsNavigator';
import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';
import { colors } from '@theme';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.inactiveTab,
};

interface ITabBarIcon {
  focused: boolean;
  color: string;
  size: number;
}

const HomeIcon: React.FC<ITabBarIcon> = ({ color }) => <HomeSVG width={30} height={30} fill={color} />;

const MatcherIcon: React.FC<ITabBarIcon> = ({ color }) => <MatcherSVG width={30} height={30} fill={color} />;

const DialogIcon: React.FC<ITabBarIcon> = ({ color }) => <DialogSVG width={30} height={30} fill={color} />;

const renderProfileTabBarIcon: React.FC<ITabBarIcon> = ({ color }) => (
  <ProfileSVG width={30} height={30} fill={color} />
);

const homeOptions: BottomTabNavigationOptions = {
  tabBarIcon: HomeIcon,
};

const eventsOptions: BottomTabNavigationOptions = {
  tabBarIcon: MatcherIcon,
};

const dialogsOptions: BottomTabNavigationOptions = {
  tabBarIcon: DialogIcon,
};

const profileOptions: BottomTabNavigationOptions = {
  tabBarIcon: renderProfileTabBarIcon,
};

const LoggedInNavigator: React.FC = () => (
  <Tab.Navigator initialRouteName={screeNames.HOME} screenOptions={screenOptions}>
    <Tab.Screen name={screeNames.TAB_HOME} component={HomeNavigator} options={homeOptions} />
    <Tab.Screen name={screeNames.TAB_EVENTS} component={EventsNavigator} options={eventsOptions} />
    <Tab.Screen name={screeNames.TAB_DIRECT} component={DirectNavigator} options={dialogsOptions} />
    <Tab.Screen name={screeNames.TAB_PROFILE} component={ProfileNavigator} options={profileOptions} />
  </Tab.Navigator>
);

export default LoggedInNavigator;
