import { emailActions } from '@store/auth/email/emailActions';
import { errorActions } from '@store/error/errorActions';
import { createTakeEverySagas } from '@utils/createTakeEverySagas';
import { put } from 'redux-saga/effects';
import { firebaseService } from '@services/FirebaseService';
import { logger } from '@utils/logger';

export const emailSagas = createTakeEverySagas<typeof emailActions>({
  [emailActions.authByEmail.type]: function* ({ payload: { email, password } }) {
    try {
      yield firebaseService.emailAuth(email, password);
    } catch (error) {
      let errorMessage = 'Something went wrong.\nTry again';
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'That email address is invalid';
          break;
        case 'auth/wrong-password':
          errorMessage = 'User not found or wrong password';
          break;
        case 'auth/user-not-found':
          errorMessage = 'User not found or wrong password';
          break;
      }
      yield put(errorActions.setErrorMessage(errorMessage));
      logger.error(error);
    }
  },
  [emailActions.createUserByEmail.type]: function* ({ payload: { email, password, confirmPassword } }) {
    if (password !== confirmPassword) {
      yield put(errorActions.setErrorMessage('The passwords entered do not match'));
    } else if (password.length <= 5) {
      yield put(errorActions.setErrorMessage('Password must be more than 5 characters'));
    } else {
      try {
        yield firebaseService.createUserByEmail(email, password);
      } catch (error) {
        let errorMessage = 'Something went wrong.\nTry again';
        switch (error.code) {
          case 'auth/email-already-in-use':
            errorMessage = 'That email address is already in use';
            break;
          case 'auth/wrong-password':
            errorMessage = 'Password field is empty';
            break;
          case 'auth/invalid-email':
            errorMessage = 'That email address is invalid';
            break;
        }
        yield put(errorActions.setErrorMessage(errorMessage));
        logger.error(error);
      }
    }
  },
  [emailActions.resetEmailPassword.type]: function* ({ payload: { email } }) {
    try {
      yield firebaseService.resetEmailPassword(email);
    } catch (error) {
      let errorMessage = 'Something went wrong.\nTry again';
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'That email address is invalid';
          break;
        case 'auth/user-not-found':
          errorMessage = 'User not found';
          break;
      }
      yield put(errorActions.setErrorMessage(errorMessage));
      logger.error(error);
    }
  },
});
