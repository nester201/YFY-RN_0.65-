import { createActions } from '@utils/createActions';

export const errorActions = createActions({
  setErrorMessage: (message: string) => ({
    message,
  }),
  clearErrorMessage: () => ({}),
});
