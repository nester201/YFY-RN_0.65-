import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@theme';
import withMemo from '@hocs/withMemo';
import PostHeader from '@components/Post/PostHeader';
import PostFooter from '@components/Post/PostFooter';

const Post = withMemo(() => (
  <View style={styles.container}>
    <PostHeader />
    <Text style={styles.mainMessage}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel purus mauris consectetur blandit pretium eu.
      Penatibus diam nunc nam sed etiam fringilla id ...
    </Text>
    <PostFooter />
  </View>
));

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.postContainer,
    marginVertical: 6,
    padding: 15,
  },
  mainMessage: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'justify',
  },
});

export default Post;
