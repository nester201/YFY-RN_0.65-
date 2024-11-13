import { IState } from '@store/IState';

export const chatSelectors = {
  getMessages: (state: IState) => state.chat.messages,
};
