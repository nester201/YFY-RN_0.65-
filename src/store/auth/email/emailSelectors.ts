import { IState } from '@store/IState';

export const emailSelectors = {
  getGetEmail: (state: IState) => state.auth.email,
  getGetPassword: (state: IState) => state.auth.password,
};
