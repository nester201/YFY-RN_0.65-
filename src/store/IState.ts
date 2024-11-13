import { IAuthState } from '@store/auth/authReducers';
import { IErrorState } from '@store/error/errorReducers';
import { IUserState } from '@store/user/userReducers';
import { IChatState } from '@store/chat/chatReducers';

export interface IState {
  auth: IAuthState;
  user: IUserState;
  error: IErrorState;
  chat: IChatState;
}
