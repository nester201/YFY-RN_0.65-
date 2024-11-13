import { screeNames } from '@config/ScreenNames';
import { navigationService } from '@services/NavigationService';
import { authActions } from '@store/auth/authActions';
import { createTakeEverySagas } from '@utils/createTakeEverySagas';
import { call } from 'redux-saga/effects';
import { firebaseService } from '@services/FirebaseService';
import { logger } from '@utils/logger';

export const authSagas = createTakeEverySagas<typeof authActions>({
  [authActions.logout.type]: function* () {
    try {
      yield call(firebaseService.logout);
      navigationService.reset(screeNames.AUTH);
    } catch (error) {
      logger.error(error);
    }
  },
});
