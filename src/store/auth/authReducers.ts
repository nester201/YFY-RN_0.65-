import { authActions } from '@store/auth/authActions';
import { emailReducer, IEmailState } from '@store/auth/email/emailReducers';
import { googleReducer, IGoogleState } from '@store/auth/google/googleReducers';
import { IPhoneState } from '@store/auth/phone/phoneReducers';
import { createReducers } from '@utils/createReducers';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
  initializingFirebase: false,
};

type IAllState = typeof INITIAL_STATE;

export interface IAuthState extends IEmailState, IGoogleState, IPhoneState, IAllState {}

export const allReducer = createReducers<IAllState, typeof authActions>(INITIAL_STATE, {
  [authActions.setInitializingFirebase.type](state, action) {
    return {
      ...state,
      initializingFirebase: action.payload.status,
    };
  },
});

export const authReducer = combineReducers({
  email: emailReducer,
  another: allReducer,
  google: googleReducer,
});
