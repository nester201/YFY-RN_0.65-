import React, { useCallback } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';

import Input from '@components/Input';
import withMemo from '@hocs/withMemo';
import useToggle from '@hooks/useToggle';
import ModalDataSelector from '@components/ModalSelector/ModalDataSelector';
import { IModalSelectorData } from '@interfaces';

type Props = {
  onSelect: (value: IModalSelectorData) => void;
  value?: string;
  placeholder?: string;
  data: IModalSelectorData[];
  style?: StyleProp<ViewStyle>;
};

const Select = withMemo<Props>(({ onSelect, value = '', placeholder, data, style }) => {
  const { on, toggleOff, toggleOn } = useToggle();

  const callback = useCallback(
    (item: IModalSelectorData) => {
      onSelect(item);
      toggleOff();
    },
    [toggleOff, onSelect]
  );

  return (
    <>
      <Pressable onPress={toggleOn}>
        <Input value={value} editable={false} placeholder={placeholder} style={style} />
      </Pressable>
      <ModalDataSelector visible={on} handleClose={toggleOff} data={data} callback={callback} />
    </>
  );
});

export default Select;
