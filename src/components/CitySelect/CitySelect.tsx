import React, { useCallback, useMemo, useState } from 'react';
import { ListRenderItem, Pressable, StyleProp, ViewStyle } from 'react-native';

import withMemo from '@hocs/withMemo';
import useToggle from '@hooks/useToggle';
import { ModalInputSelector } from '@components/ModalSelector/ModalInputSelector';
import { useCityAutofill } from '@hooks/useCityAutofill';
import { ICitySelect } from '@interfaces';
import Input from '@components/Input';
import CitySelectItem from '@components/CitySelect/CitySelectItem';

type Props = {
  onSelect: (value: ICitySelect) => void;
  city?: ICitySelect;
  inputStyle?: StyleProp<ViewStyle>;
};

const CitySelect = withMemo<Props>(({ onSelect, city, inputStyle }) => {
  const [searchCity, setSearchCity] = useState('');
  const cities = useCityAutofill(searchCity);
  const cityValue = useMemo(() => city?.data.city || city?.data.settlement || '', [city]);

  const { on, toggleOff, toggleOn } = useToggle();

  const handleClickResult = useCallback(
    (item: ICitySelect) => {
      onSelect(item);
      toggleOff();
    },
    [toggleOff, onSelect]
  );

  const renderResults: ListRenderItem<ICitySelect> = useCallback(
    ({ item }) => {
      const handleClick = () => handleClickResult(item);

      return <CitySelectItem item={item} handleClick={handleClick} />;
    },
    [handleClickResult]
  );

  const getKeyExtractor = useCallback((item: ICitySelect) => item.value, []);

  return (
    <>
      <Pressable onPress={toggleOn}>
        <Input value={cityValue} editable={false} placeholder={'City'} style={inputStyle} />
      </Pressable>
      <ModalInputSelector
        visible={on}
        handleClose={toggleOff}
        data={cities}
        renderItem={renderResults}
        keyExtractor={getKeyExtractor}
        onChangeText={setSearchCity}
      />
    </>
  );
});

export default CitySelect;
