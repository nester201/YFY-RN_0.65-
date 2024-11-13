import { IState } from '@store/IState';

export const phoneSelectors = {
  getConfirmationResult: (state: IState) => state.auth.confirmationResult,
};
