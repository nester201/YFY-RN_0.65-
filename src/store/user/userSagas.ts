import { userActions } from '@store/user/userActions';
import { createTakeEverySagas } from '@utils/createTakeEverySagas';
import { put, call } from 'redux-saga/effects';
import { userService } from '@services/UserService';

export const userSagas = createTakeEverySagas<typeof userActions>({
  [userActions.fetchUser.type]: function* fetchUser() {
    yield put(userActions.fetchUserLoading());
    try {
      const user = yield call(userService.fetchUser, 'Auriil');
      yield put(userActions.fetchUserSuccess(user));
    } catch (error) {
      yield put(userActions.fetchUserFailure(error));
    }
  },
});
