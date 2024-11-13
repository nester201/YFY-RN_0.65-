import React, { useCallback } from 'react';
import { users } from '@assets/mocks/users';
import { IChatMessage } from '@interfaces/room';
import Chat from '@components/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { chatSelectors } from '@store/chat/chatSelectors';
import { chatActions } from '@store/chat/chatActions';

const RoomScreen = () => {
  const user = users[0];
  const messages = useSelector(chatSelectors.getMessages);
  const dispatch = useDispatch();

  const handleSend = useCallback(
    (newMessages: IChatMessage[]) => {
      dispatch(chatActions.sendMessages(newMessages));
    },
    [dispatch]
  );

  return <Chat messages={messages} onSend={handleSend} user={user} />;
};

export default RoomScreen;
