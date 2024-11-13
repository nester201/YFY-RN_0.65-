import React, { useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { screeNames } from '@config/ScreenNames';
import AvatarImage from '@components/AvatarImage';
import ArrowSVG from '@assets/icons/arrow.svg';
import withMemo from '@hocs/withMemo';
import { IChatMessage } from '@interfaces/room';
import { useNavigation } from '@react-navigation/native';
import { colors } from '@theme';
import { IUser } from '@models/User';
import dayjs from 'dayjs';

type Props = {
  user: IUser;
  lastMessage: IChatMessage;
};

const RoomItem = withMemo<Props>(({ user, lastMessage }) => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => navigation.navigate(screeNames.ROOM, { user }), [navigation, user]);

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <AvatarImage style={styles.avatar} source={user.photos[0] ? { uri: user.photos[0] } : undefined} size={48} />
      <View style={styles.descriptionContainer}>
        <View style={styles.descriptionHeader}>
          <Text style={styles.nickname}>{user.nickname}</Text>
          <Text style={styles.time}>{dayjs(lastMessage.createdAt).format('HH:mm')}</Text>
        </View>
        <Text style={styles.mainMessage} numberOfLines={1}>
          {lastMessage.text}
        </Text>
      </View>
      <View style={styles.arrowContainer}>
        <ArrowSVG style={styles.arrowIcon} height={16} fill={'#999'} />
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainContainerBackground,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 2,
  },
  avatar: {
    marginRight: 16,
  },
  descriptionHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nickname: {
    fontSize: 16,
    color: colors.mainText,
  },
  time: {
    fontSize: 13,
    color: colors.secondaryText,
    paddingTop: 2,
    marginLeft: 8,
  },
  mainMessage: {
    fontSize: 15,
    color: colors.secondaryText,
    flex: 1,
  },
  arrowContainer: {
    marginLeft: 30,
    marginRight: 6,
  },
  arrowIcon: {
    transform: [{ rotate: '180deg' }],
  },
});

export default RoomItem;
