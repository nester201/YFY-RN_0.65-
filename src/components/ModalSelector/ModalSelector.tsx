import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal, { Direction } from 'react-native-modal';

import { colors } from '@theme';
import withMemo from '@hocs/withMemo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  visible: boolean;
  handleClose: () => void;
};

const swipeDirection: Direction[] = ['down'];

export const ModalSelector = withMemo<Props>(({ visible, handleClose, children }) => {
  const insets = useSafeAreaInsets();

  const containerStyle = useMemo(() => [modalSelectorStyles.container, { paddingBottom: insets.bottom }], [
    insets.bottom,
  ]);

  return (
    <Modal
      isVisible={visible}
      backdropTransitionInTiming={400}
      backdropTransitionOutTiming={500}
      animationInTiming={400}
      animationOutTiming={500}
      onBackdropPress={handleClose}
      swipeDirection={swipeDirection}
      onSwipeComplete={handleClose}
      useNativeDriverForBackdrop
      style={modalSelectorStyles.view}
    >
      <View style={containerStyle}>
        <View style={modalSelectorStyles.drag} />
        <View style={modalSelectorStyles.content}>{children}</View>
      </View>
    </Modal>
  );
});

export const modalSelectorStyles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  drag: {
    width: 80,
    height: 4,
    backgroundColor: '#e0e0e0',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 24,
  },
  content: {
    paddingHorizontal: 22,
    paddingBottom: 50,
  },
  button: {
    paddingTop: 16,
    paddingBottom: 18,
    paddingHorizontal: 14,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#efefef',
    borderBottomColor: '#efefef',
  },
  text: {
    fontSize: 18,
    color: colors.mainText,
  },
});
