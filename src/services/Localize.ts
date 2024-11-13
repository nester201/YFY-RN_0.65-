import { ICountriesJSON } from '@interfaces';
import { findBestAvailableLanguage, getCountry } from 'react-native-localize';

import countriesData from '@assets/data/countries.json';

const translationGetters = {
  en: () => require('@translations/en.json'),
  ru: () => require('@translations/ru.json'),
};

const fallback = { languageTag: 'en', isRTL: false };

export const localize = {
  getLocale: () => findBestAvailableLanguage(Object.keys(translationGetters)) || fallback,

  getDefaultCountryCode: () => {
    const country = (countriesData as ICountriesJSON)[getCountry() || 'BY'];
    return {
      name: country.name[localize.getLocale().languageTag],
      code: country.callingCode[0],
    };
  },
};
