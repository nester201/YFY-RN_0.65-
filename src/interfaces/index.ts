export interface IPhoto {
  uri: string;
}

export interface IModalSelectorData {
  key: string;
  title: string;
}

export interface ICitySelect {
  value: string;
  data: {
    postal_code: string;
    country: string;
    city: string;
    settlement: string;
    geoname_id: string;
  };
}

export interface ICountry {
  currency: string[];
  callingCode: string[];
  region: string;
  subregion: string;
  flag: string;
  firebasePhoneAuth: boolean;
  name: {
    [lang: string]: string;
  };
}

export interface ICountriesJSON {
  [countryCode: string]: ICountry;
}

export interface ICountrySelect {
  name: string;
  code: string;
}
