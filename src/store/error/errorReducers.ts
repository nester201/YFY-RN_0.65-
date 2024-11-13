import { errorActions } from '@store/error/errorActions';
import { createReducers } from '@utils/createReducers';

const INITIAL_STATE = {
  message: '',
};

export type IErrorState = typeof INITIAL_STATE;

export const errorReducer = createReducers<IErrorState, typeof errorActions>(INITIAL_STATE, {
  [errorActions.setErrorMessage.type](state, action) {
    return {
      ...state,
      message: action.payload.message,
    };
  },
  [errorActions.clearErrorMessage.type](state) {
    return {
      ...state,
      message: '',
    };
  },
});
