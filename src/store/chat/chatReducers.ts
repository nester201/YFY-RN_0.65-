import { createReducers } from '@utils/createReducers';
import { chatActions } from '@store/chat/chatActions';
import { IChatMessage } from '@interfaces/room';
import { mockMessages } from '@assets/mocks/messages';

const INITIAL_STATE = {
  messages: mockMessages as IChatMessage[],
};

export type IChatState = typeof INITIAL_STATE;

export const chatReducer = createReducers<IChatState, typeof chatActions>(INITIAL_STATE, {
  [chatActions.setMessages.type](state, action) {
    return {
      ...state,
      messages: [...action.payload.messages, ...state.messages],
    };
  },
});
