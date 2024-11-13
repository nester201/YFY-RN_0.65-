import { call, put } from 'redux-saga/effects';

import { firebaseService } from '@services/FirebaseService';
import { googleActions } from '@store/auth/google/googleActions';
import { createTakeEverySagas } from '@utils/createTakeEverySagas';
import { errorActions } from '@store/error/errorActions';
import { logger } from '@utils/logger';
import { navigationService } from '@services/NavigationService';
import { screeNames } from '@config/ScreenNames';

export const googleSagas = createTakeEverySagas<typeof googleActions>({
  [googleActions.authByGoogle.type]: function* () {
    try {
      yield call(firebaseService.googleAuth);
      navigationService.reset(screeNames.LOGGED_IN);
    } catch (error) {
      yield put(errorActions.setErrorMessage('Something went wrong. Try again or choose another method'));
      logger.error(error);
    }
  },
});
