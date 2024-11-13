import { IUser } from '@models/User';
import { createActions } from '@utils/createActions';

export const userActions = createActions({
  fetchUser: () => ({}),
  fetchUserLoading: () => ({}),
  fetchUserSuccess: (user: IUser) => ({
    user,
  }),
  fetchUserFailure: (errorMessage: string) => ({
    errorMessage,
  }),
});
