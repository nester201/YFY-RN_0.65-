import { authReducer } from '@store/auth/authReducers';
import { configStore } from '@store/configStore';
import { errorReducer } from '@store/error/errorReducers';
import { rootSaga } from '@store/rootSaga';
import { userReducer } from '@store/user/userReducers';
import { combineReducers } from 'redux';
import { chatReducer } from '@store/chat/chatReducers';

export const creatAppStore = () => {
  const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    error: errorReducer,
    chat: chatReducer,
  });

  return configStore(rootReducer, rootSaga);
};
