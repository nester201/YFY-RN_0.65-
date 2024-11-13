import React from 'react';
import AvatarImage from '@components/AvatarImage';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import OptionsSVG from '@assets/icons/options.svg';
import { colors } from '@theme';
import withMemo from '@hocs/withMemo';

const PostHeader = withMemo(() => (
  <View style={styles.container}>
    <AvatarImage style={styles.avatar} source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }} size={50} />
    <View>
      <Text style={styles.nickname}>Nickname</Text>
      <Text style={styles.type}>Post type</Text>
    </View>
    <TouchableOpacity style={styles.optionsButton} accessibilityRole={'button'}>
      <OptionsSVG width={22} height={10} fill={colors.optionsIcon} />
    </TouchableOpacity>
  </View>
));

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  avatar: {
    marginRight: 10,
  },
  nickname: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '300',
  },
  optionsButton: {
    position: 'absolute',
    right: 22,
    top: 25,
  },
});

export default PostHeader;
