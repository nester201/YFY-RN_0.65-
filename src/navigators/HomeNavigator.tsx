import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { screeNames } from '@config/ScreenNames';
import HomeScreen from '@containers/HomeScreen';
import TextLogoSVG from '@assets/icons/text-logo.svg';
import { colors } from '@theme';
import CreatePostButton from '@components/HeaderButtons/CreatePostButton';
import FilterPostsButton from '@components/HeaderButtons/FilterPostsButton';
import PostCreationScreen from '@containers/PostCreationScreen';
import FilterPostsScreen from '@containers/FilterPostsScreen';
import BackButton from '@components/HeaderButtons/BackButton';

const HomeStack = createStackNavigator();

const screenOptions = (): StackNavigationOptions => ({
  title: 'Home',
  headerShown: true,
  headerTitleAlign: 'center',
  cardStyle: { backgroundColor: colors.secondaryContainerBackground },
});

const renderBackButton = () => <BackButton />;

const renderHeaderLeft = () => <CreatePostButton />;

const renderHeaderRight = () => <FilterPostsButton />;

const renderHeaderTitle = () => <TextLogoSVG height={28} />;

const homeOptions = (): StackNavigationOptions => ({
  headerTitle: renderHeaderTitle,
  headerLeft: renderHeaderLeft,
  headerRight: renderHeaderRight,
});

const postCreationOptions = (): StackNavigationOptions => ({
  headerTitle: 'Post creation',
  headerLeft: renderBackButton,
  gestureDirection: 'horizontal-inverted',
});

const filterPostsOptions = (): StackNavigationOptions => ({
  headerTitle: 'Filters',
  headerLeft: renderBackButton,
});

const HomeNavigator: React.FC = () => (
  <HomeStack.Navigator initialRouteName={screeNames.HOME} screenOptions={screenOptions}>
    <HomeStack.Screen name={screeNames.HOME} component={HomeScreen} options={homeOptions} />
    <HomeStack.Screen name={screeNames.POST_CREATION} component={PostCreationScreen} options={postCreationOptions} />
    <HomeStack.Screen name={screeNames.FILTER_POSTS} component={FilterPostsScreen} options={filterPostsOptions} />
  </HomeStack.Navigator>
);

export default HomeNavigator;
