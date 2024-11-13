import { authSagas } from '@store/auth/authSagas';
import { emailSagas } from '@store/auth/email/emailSaga';
import { googleSagas } from '@store/auth/google/googleSaga';
import { phoneSagas } from '@store/auth/phone/phoneSagas';
import { errorSagas } from '@store/error/errorSagas';
import { userSagas } from '@store/user/userSagas';
import { chatSagas } from './chat/chatSagas';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([...userSagas, ...emailSagas, ...googleSagas, ...phoneSagas, ...authSagas, ...errorSagas, ...chatSagas]);
}
