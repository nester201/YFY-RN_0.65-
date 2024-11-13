import { createActions } from '@utils/createActions';
import { IChatMessage } from '@interfaces/room';

export const chatActions = createActions({
  sendMessages: (messages: IChatMessage[]) => ({
    messages,
  }),
  setMessages: (messages: IChatMessage[]) => ({
    messages,
  }),
});
