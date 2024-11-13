import { useEffect, useState } from 'react';
import { sortBy } from 'lodash';

import { ICountry, ICountrySelect } from '@interfaces';
import { localize } from '@services/Localize';

import countriesData from '@assets/data/countries.json';

const lang = localize.getLocale().languageTag;

export const useCountryAutofill = (value: string): ICountrySelect[] => {
  const [countries, setCountries] = useState<ICountrySelect[]>([]);

  useEffect(() => {
    const filteredCountries: ICountrySelect[] = [];
    Object.values(countriesData).map((country: ICountry) => {
      const name = country.name[lang];
      if (name.toLowerCase().includes(value.toLowerCase())) {
        filteredCountries.push({
          name,
          code: country.callingCode[0],
        });
      }
    });
    filteredCountries.length && sortBy(filteredCountries, ['name']);
    setCountries(Object.values(filteredCountries));
  }, [value]);

  return countries;
};
