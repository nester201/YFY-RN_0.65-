import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createActions } from '@utils/createActions';

export const phoneActions = createActions({
  authByPhone: (phoneNumber: string) => ({
    phoneNumber,
  }),
  verificationNumber: (code: string) => ({
    code,
  }),
  setConfirmationResult: (result: FirebaseAuthTypes.ConfirmationResult | null) => ({
    result,
  }),
});
