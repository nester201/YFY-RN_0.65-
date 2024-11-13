import React, { useCallback, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import Post from '@components/Post/Post';

// TODO move to single file and pass from redux
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Third Item',
  },
];

const HomeScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(() => {
    console.log('refresh posts');
    setIsRefreshing(true);
  }, []);

  const renderPost = useCallback(() => <Post />, []);

  const getKeyExtractor = useCallback((item: any) => item.id, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderPost}
        keyExtractor={getKeyExtractor}
        showsVerticalScrollIndicator={false}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 6,
  },
});

export default HomeScreen;
