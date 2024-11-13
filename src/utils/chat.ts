import { IChatMessage } from '@interfaces/room';
import dayjs from 'dayjs';

export function isSameDay(currentMessage: IChatMessage, diffMessage: IChatMessage | null | undefined) {
  if (!diffMessage || !diffMessage.createdAt) {
    return false;
  }

  const currentCreatedAt = dayjs(currentMessage.createdAt);
  const diffCreatedAt = dayjs(diffMessage.createdAt);

  if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid()) {
    return false;
  }

  return currentCreatedAt.isSame(diffCreatedAt, 'day');
}

export function isSameUser(currentMessage: IChatMessage, diffMessage: IChatMessage | null | undefined) {
  return diffMessage && diffMessage.user && currentMessage.user && diffMessage.user.id === currentMessage.user.id;
}
