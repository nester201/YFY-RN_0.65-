import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import FacebookSVG from '@assets/icons/social/facebook-circle.svg';
import InstagramSVG from '@assets/icons/social/instagram-circle.svg';
import VkSVG from '@assets/icons/social/vk-circle.svg';
import { IUser } from '@models/User';
import AvatarImage from '@components/AvatarImage';
import SocialButton from '@components/SocialButton';
import { colors } from '@theme';
import withMemo from '@hocs/withMemo';

type Props = {
  user: IUser;
};

const ProfileInfo = withMemo<Props>(({ user }) => (
  <View style={styles.container}>
    <AvatarImage source={user.photos[0] ? { uri: user.photos[0] } : undefined} size={85} style={styles.avatarImage} />
    <Text style={styles.nickname}>{user.nickname}</Text>
    <TextInput
      placeholder={'Edit your description'}
      maxLength={150}
      multiline={true}
      blurOnSubmit={true}
      returnKeyType={'done'}
      style={styles.descriptionInput}
    />
    <View style={styles.socialContainer}>
      <SocialButton Icon={VkSVG} />
      <SocialButton Icon={InstagramSVG} />
      <SocialButton Icon={FacebookSVG} />
    </View>
  </View>
));

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: colors.profileContainer,
    marginHorizontal: 18,
    marginTop: 60,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 30,
    shadowColor: '#4777e6',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 8,
    elevation: 5,
  },
  avatarImage: {
    marginTop: -40,
  },
  nickname: {
    borderRadius: 5,
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 9,
  },
  descriptionInput: {
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: 'transparent',
    padding: 0,
    width: '100%',
    marginBottom: 17,
  },
  socialContainer: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: 177,
    justifyContent: 'space-between',
  },
});

export default ProfileInfo;
