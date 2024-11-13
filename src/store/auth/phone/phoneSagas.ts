import { screeNames } from '@config/ScreenNames';
import { navigationService } from '@services/NavigationService';
import { phoneActions } from '@store/auth/phone/phoneActions';
import { phoneSelectors } from '@store/auth/phone/phoneSelectors';
import { errorActions } from '@store/error/errorActions';
import { createTakeEverySagas } from '@utils/createTakeEverySagas';
import { put, select } from 'redux-saga/effects';
import { firebaseService } from '@services/FirebaseService';
import { logger } from '@utils/logger';

export const phoneSagas = createTakeEverySagas<typeof phoneActions>({
  [phoneActions.authByPhone.type]: function* ({ payload: { phoneNumber } }) {
    try {
      const confirmationResult = yield firebaseService.phoneAuth(phoneNumber);
      navigationService.navigate(screeNames.PHONE_AUTH_VERIFICATION);
      yield put(phoneActions.setConfirmationResult(confirmationResult));
    } catch (error) {
      yield put(errorActions.setErrorMessage('Wrong phone number.\nTry again'));
      logger.error(error);
    }
  },
  [phoneActions.verificationNumber.type]: function* ({ payload: { code } }) {
    try {
      const confirmationResult = yield select(phoneSelectors.getConfirmationResult);
      yield confirmationResult.confirm(code);
      navigationService.reset(screeNames.LOGGED_IN);
    } catch (error) {
      yield put(errorActions.setErrorMessage('Wrong verification code.\nTry again'));
      logger.error(error);
    }
  },
});
