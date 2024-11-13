import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import ModalSelectorItem from '@components/ModalSelector/ModalSelectorItem';
import { ModalSelector } from '@components/ModalSelector/ModalSelector';
import withMemo from '@hocs/withMemo';
import { IModalSelectorData } from '@interfaces';

type Props = {
  visible: boolean;
  handleClose: () => void;
  data: IModalSelectorData[];
  callback: (item: IModalSelectorData) => void;
};

const ModalDataSelector = withMemo<Props>(({ visible, handleClose, data, callback }) => {
  const renderItem: ListRenderItem<IModalSelectorData> = useCallback(
    ({ item, index }) => (
      <ModalSelectorItem text={item.title} handleClick={() => callback(item)} lastChild={index === data.length - 1} />
    ),
    [callback, data.length]
  );

  const getKeyExtractor = useCallback((item: IModalSelectorData) => item.key, []);

  return (
    <ModalSelector visible={visible} handleClose={handleClose}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={getKeyExtractor} alwaysBounceVertical={false} />
    </ModalSelector>
  );
});

export default ModalDataSelector;
