import React, { useMemo } from 'react';
import { Pressable, Text } from 'react-native';
import withMemo from '@hocs/withMemo';
import { modalSelectorStyles } from '@components/ModalSelector/ModalSelector';

type Props = {
  text: string;
  handleClick: () => void;
  lastChild?: boolean;
};

const ModalSelectorItem = withMemo<Props>(({ text, handleClick, lastChild }) => {
  const buttonStyles = useMemo(() => [modalSelectorStyles.button, { borderBottomWidth: lastChild ? 1 : 0 }], [
    lastChild,
  ]);

  return (
    <Pressable style={buttonStyles} onPress={handleClick}>
      <Text style={modalSelectorStyles.text}>{text}</Text>
    </Pressable>
  );
});

export default ModalSelectorItem;
