import React, { useCallback, useEffect, useState } from 'react';
import { ListRenderItem, Pressable } from 'react-native';

import { useCountryAutofill } from '@hooks/useCountryAutofill';
import useToggle from '@hooks/useToggle';
import { ICountrySelect } from '@interfaces';
import withMemo from '@hocs/withMemo';
import Input from '@components/Input';
import { ModalInputSelector } from '@components/ModalSelector/ModalInputSelector';
import CountryCodeItem from '@components/CountryCodeSelect/CountryCodeItem';
import { localize } from '@services/Localize';

type Props = {
  onSelect: (value: ICountrySelect) => void;
  country?: ICountrySelect;
};

const CountryCodeSelect = withMemo<Props>(({ country, onSelect }) => {
  const [searchCountry, setSearchCountry] = useState('');
  const countries = useCountryAutofill(searchCountry);
  const { on, toggleOff, toggleOn } = useToggle();

  useEffect(() => {
    onSelect(localize.getDefaultCountryCode());
  }, [onSelect]);

  const handleClickResult = useCallback(
    (item: ICountrySelect) => {
      onSelect(item);
      toggleOff();
    },
    [toggleOff, onSelect]
  );

  const renderResults: ListRenderItem<ICountrySelect> = useCallback(
    ({ item }) => {
      const handleClick = () => handleClickResult(item);

      return <CountryCodeItem item={item} handleClick={handleClick} />;
    },
    [handleClickResult]
  );

  const getKeyExtractor = useCallback((item: ICountrySelect) => item.name, []);

  return (
    <>
      <Pressable onPress={toggleOn}>
        <Input value={country?.name || ''} editable={false} placeholder={'Country'} />
      </Pressable>
      <ModalInputSelector
        visible={on}
        handleClose={toggleOff}
        data={countries}
        renderItem={renderResults}
        keyExtractor={getKeyExtractor}
        onChangeText={setSearchCountry}
      />
    </>
  );
});

export default CountryCodeSelect;
