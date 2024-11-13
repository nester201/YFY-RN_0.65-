import { IUser } from '@models/User';
import { userActions } from '@store/user/userActions';
import { createReducers } from '@utils/createReducers';

const INITIAL_STATE = {
  user: null as IUser | null,
  userIsLoading: false,
  userErrorMessage: '',
};

export type IUserState = typeof INITIAL_STATE;

export const userReducer = createReducers<IUserState, typeof userActions>(INITIAL_STATE, {
  [userActions.fetchUserLoading.type](state) {
    return {
      ...state,
      userIsLoading: true,
      userErrorMessage: '',
    };
  },
  [userActions.fetchUserSuccess.type](state, action) {
    return {
      ...state,
      user: action.payload.user,
      userIsLoading: false,
      userErrorMessage: '',
    };
  },
  [userActions.fetchUserFailure.type](state, action) {
    return {
      ...state,
      user: null,
      userIsLoading: false,
      userErrorMessage: action.payload.errorMessage,
    };
  },
});
