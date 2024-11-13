import { errorActions } from '@store/error/errorActions';
import { takeEvery, call } from 'redux-saga/effects';

function* clearErrorMessage() {
  yield call(errorActions.clearErrorMessage);
}

export const errorSagas = [takeEvery('*', clearErrorMessage)];
