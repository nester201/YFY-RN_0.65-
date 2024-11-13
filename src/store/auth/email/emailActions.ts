import { createActions } from '@utils/createActions';

export const emailActions = createActions({
  authByEmail: (email: string, password: string) => ({ email, password }),
  createUserByEmail: (email: string, password: string, confirmPassword: string) => ({
    email,
    password,
    confirmPassword,
  }),
  resetEmailPassword: (email: string) => ({ email }),
});
