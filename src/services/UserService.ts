import { get } from 'lodash';

import { IUser } from '@models/User';
import { logger } from '@utils/logger';
import userMock from '@assets/mocks/user.json';

/*const isBetween = (min: number, max: number, value: number) => {
  return min <= value && max >= value;
};

const in200s = (value: number) => isBetween(200, 299, value);

const userApiClient = axios.create({
  baseURL: config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});*/

export const userService = {
  fetchUser: (nickname: string): Promise<IUser> => {
    /*if (Math.random() > 0.2) {
    return new Promise(reject => reject());
    }*/

    logger.log('-- fetchUser --');
    logger.log(nickname);
    return get(userMock, 'body.user');
    /*return userApiClient.get(number.toString()).then(response => {
    if (in200s(response.status)) {
      return response.data;
    }

      return null;
    });*/
  },
};
