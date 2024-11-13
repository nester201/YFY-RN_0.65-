import { IState } from '@store/IState';

export const userSelectors = {
  getUser: (state: IState) => state.user.user,
};
