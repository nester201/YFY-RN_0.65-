import { IState } from '@store/IState';

export const errorSelectors = {
  getErrorMessage: (state: IState) => state.error.message,
};
