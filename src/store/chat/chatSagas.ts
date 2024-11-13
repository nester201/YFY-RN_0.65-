import { createTakeEverySagas } from '@utils/createTakeEverySagas';
import { put } from 'redux-saga/effects';
import { chatActions } from '@store/chat/chatActions';

export const chatSagas = createTakeEverySagas<typeof chatActions>({
  [chatActions.sendMessages.type]: function* ({ payload: { messages } }) {
    if (!Array.isArray(messages)) {
      messages = [messages];
    }
    yield put(chatActions.setMessages(messages));
  },
});
