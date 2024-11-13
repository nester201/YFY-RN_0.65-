import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { ICitySelect } from '@interfaces';

const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
const token = 'b3aefcc699751c55bca87c1027f9263684ef0bb8';

export const useCityAutofill = (value: string): ICitySelect[] => {
  const [cities, setCities] = useState<any[]>([]);

  useEffect(
    () =>
      throttle(
        () => {
          fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: 'Token ' + token,
            },
            body: JSON.stringify({
              query: value,
              locations: [
                {
                  country: '*',
                },
              ],
              from_bound: { value: 'city' },
              to_bound: { value: 'settlement' },
            }),
          })
            .then(response => response.json())
            .then(newCities => setCities(newCities.suggestions));
        },
        300,
        { leading: false }
      ),
    [value]
  );

  return cities;
};
