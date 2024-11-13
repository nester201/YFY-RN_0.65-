import { createActions } from '@utils/createActions';

export const authActions = createActions({
  logout: () => ({}),
  setInitializingFirebase: (status: boolean) => ({
    status,
  }),
});
