import React, { useMemo } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Modal, { Direction } from 'react-native-modal';

import withMemo from '@hocs/withMemo';
import Input from '@components/Input';
import { modalSelectorStyles } from './ModalSelector';

type Props = {
  visible: boolean;
  handleClose: () => void;
  data: any[];
  renderItem: ListRenderItem<any>;
  keyExtractor: (item: any) => string;
  onChangeText: (text: string) => void;
};

const swipeDirection: Direction[] = ['down'];

export const ModalInputSelector = withMemo<Props>(
  ({ visible, handleClose, data, renderItem, keyExtractor, onChangeText }) => {
    const insets = useSafeAreaInsets();

    const containerStyle = useMemo(
      () => [modalSelectorStyles.container, { flex: 1, paddingBottom: insets.bottom, marginTop: insets.top + 50 }],
      [insets.bottom, insets.top]
    );

    return (
      <Modal
        isVisible={visible}
        onBackdropPress={handleClose}
        swipeDirection={swipeDirection}
        onSwipeComplete={handleClose}
        useNativeDriverForBackdrop
        avoidKeyboard
        propagateSwipe={true}
        style={modalSelectorStyles.view}
      >
        <View style={containerStyle}>
          <View style={modalSelectorStyles.drag} />
          <View style={modalSelectorStyles.content}>
            <Input
              placeholder={'Search'}
              onChangeText={onChangeText}
              style={styles.input}
              autoCorrect={false}
              autoFocus
            />
            <FlatList
              style={styles.resultsContainer}
              data={data}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={false}
              keyboardDismissMode={'on-drag'}
              keyboardShouldPersistTaps={'handled'}
            />
          </View>
        </View>
      </Modal>
    );
  }
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 5,
  },
  resultsContainer: {
    paddingTop: 6,
  },
});
