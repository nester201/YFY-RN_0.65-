import { googleActions } from '@store/auth/google/googleActions';
import { createReducers } from '@utils/createReducers';

const INITIAL_STATE = {
  field: '',
};

export type IGoogleState = typeof INITIAL_STATE;

export const googleReducer = createReducers<IGoogleState, typeof googleActions>(INITIAL_STATE, {
  [googleActions.authByGoogle.type](state) {
    return {
      ...state,
    };
  },
});
