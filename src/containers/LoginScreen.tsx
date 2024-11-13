import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp2dp } from 'react-native-responsive-screen';

import { colors, fonts } from '@theme';
import LogoSVG from '@assets/icons/logo.svg';
import TextLogoSVG from '@assets/icons/text-logo.svg';
import { hp, wp } from '@utils/demension';
import { screeNames } from '@config/ScreenNames';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { ChoiceAuth } from '@components/Auth/ChoiceAuth';
import { EmailAuthCreate } from '@components/Auth/Email/EmailAuthCreate';
import { EmailAuthReset } from '@components/Auth/Email/EmailAuthReset';
import { PhoneAuth } from '@components/Auth/Phone/PhoneAuth';
import { EmailAuthMain } from '@components/Auth/Email/EmailAuthMain';
import { LoginBackButton } from '@components/Auth/LoginBackButton';
import { PhoneAuthVerification } from '@components/Auth/Phone/PhoneAuthVerification';

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardOverlayEnabled: false,
  cardShadowEnabled: false,
  cardStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: wp(25),
    paddingVertical: hp(30),
  },
};

export const LoginScreen = () => (
  <SafeAreaView style={styles.safeArea}>
    <KeyboardAvoidingView behavior={'position'}>
      <View style={styles.container}>
        <View style={styles.header}>
          <LoginBackButton />
          <LogoSVG style={styles.logoIcon} width={121} />
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <TextLogoSVG width={wp2dp(68)} height={58} />
          </View>
        </View>
        <Stack.Navigator initialRouteName={screeNames.CHOOSE_AUTH} screenOptions={screenOptions}>
          <Stack.Screen name={screeNames.CHOOSE_AUTH} component={ChoiceAuth} />
          <Stack.Screen name={screeNames.EMAIL_AUTH_MAIN} component={EmailAuthMain} />
          <Stack.Screen name={screeNames.EMAIL_AUTH_CREATE} component={EmailAuthCreate} />
          <Stack.Screen name={screeNames.EMAIL_AUTH_RESET} component={EmailAuthReset} />
          <Stack.Screen name={screeNames.PHONE_AUTH} component={PhoneAuth} />
          <Stack.Screen name={screeNames.PHONE_AUTH_VERIFICATION} component={PhoneAuthVerification} />
        </Stack.Navigator>
      </View>
    </KeyboardAvoidingView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.authContainerBackground,
  },
  container: {
    height: '100%',
  },
  header: {
    flex: 1,
  },
  welcomeTextContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  logoIcon: {
    flex: 3.6,
    alignSelf: 'center',
  },
  welcomeText: {
    fontSize: wp(32),
    fontFamily: fonts.familyMuseo,
    alignSelf: 'center',
    fontWeight: '500',
  },
});
