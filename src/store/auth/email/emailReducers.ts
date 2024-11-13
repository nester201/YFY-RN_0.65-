import { emailActions } from '@store/auth/email/emailActions';
import { createReducers } from '@utils/createReducers';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export type IEmailState = typeof INITIAL_STATE;

export const emailReducer = createReducers<IEmailState, typeof emailActions>(INITIAL_STATE, {
  [emailActions.authByEmail.type](state, action) {
    return {
      ...state,
      ...action.payload,
    };
  },
});
