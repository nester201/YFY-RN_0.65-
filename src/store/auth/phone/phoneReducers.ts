import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { phoneActions } from '@store/auth/phone/phoneActions';
import { createReducers } from '@utils/createReducers';

const INITIAL_STATE = {
  confirmationResult: null as FirebaseAuthTypes.ConfirmationResult | null,
};

export type IPhoneState = typeof INITIAL_STATE;

export const phoneReducer = createReducers<IPhoneState, typeof phoneActions>(INITIAL_STATE, {
  [phoneActions.setConfirmationResult.type](state, action) {
    return {
      ...state,
      confirmationResult: action.payload.result,
    };
  },
});
