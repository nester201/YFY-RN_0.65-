import React, { useCallback, useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';

import RoomItem from '@components/RoomItem';
import { IRoomsListItem } from '@interfaces/room';
import { mockMessages } from '@assets/mocks/messages';
import { users } from '@assets/mocks/users';

// TODO move to single file and pass from redux
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    user: users[1],
    lastMessage: mockMessages[mockMessages.length - 1],
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    user: users[0],
    lastMessage: mockMessages[mockMessages.length - 1],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    user: users[1],
    lastMessage: mockMessages[mockMessages.length - 1],
  },
];

const DirectScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(() => {
    console.log('refresh direct');
    setIsRefreshing(true);
  }, []);

  const renderRoom: ListRenderItem<IRoomsListItem> = useCallback(
    ({ item }) => <RoomItem user={item.user} lastMessage={item.lastMessage} />,
    []
  );

  const getKeyExtractor = useCallback((item: IRoomsListItem) => item.id, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderRoom}
        keyExtractor={getKeyExtractor}
        showsVerticalScrollIndicator={false}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DirectScreen;
