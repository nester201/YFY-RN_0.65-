import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '@theme';
import withMemo from '@hocs/withMemo';

const PostFooter = withMemo(() => (
  <View style={styles.container}>
    <Text style={styles.date}>12.11.2020</Text>
    <TouchableOpacity style={styles.commentsButton}>
      <Text style={styles.commentsText}>12 comments</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.matchButton} />
  </View>
));

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  date: {
    fontSize: 11,
    lineHeight: 20,
    fontWeight: '300',
  },
  commentsButton: {
    marginLeft: 14,
    marginRight: 'auto',
  },
  commentsText: {
    fontWeight: '300',
    fontSize: 11,
    lineHeight: 20,
  },
  matchButton: {
    width: 34,
    height: 34,
    backgroundColor: colors.primary,
    borderRadius: 17,
  },
});

export default PostFooter;
