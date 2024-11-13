import { IChatMessage } from '@interfaces/room';
import { users } from '@assets/mocks/users';

export const mockMessages: IChatMessage[] = [
  {
    id: 9,
    text: 'Viewed',
    createdAt: new Date().getTime(),
    user: users[0],
    viewed: true,
  },
  {
    id: 8,
    text: 'Pending',
    createdAt: new Date().getTime(),
    user: users[0],
    pending: true,
  },
  {
    id: 7,
    text: 'Error',
    createdAt: new Date().getTime(),
    user: users[0],
    error: true,
  },
  {
    id: 12,
    text: "I'm busy now, send me email\nandruxach@gmail.com",
    createdAt: new Date().getTime(),
    user: users[1],
  },
  {
    id: 11,
    text: 'Call me\n+375257602453',
    createdAt: new Date().getTime(),
    user: users[0],
  },
  {
    id: 10,
    text: 'Look what I found 🙃\nhttps://www.youtube.com/watch?v=qEwfk5k6j6U',
    createdAt: new Date().getTime(),
    user: users[1],
  },
  {
    id: 6,
    text: '',
    createdAt: new Date().getTime(),
    user: users[0],
    image:
      'https://images.unsplash.com/photo-1616074995820-be2be3f4487a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
  },
  {
    id: 5,
    text: 'Nice!',
    createdAt: new Date().getTime(),
    user: users[0],
  },
  {
    id: 4,
    text: '',
    createdAt: new Date().getTime(),
    user: users[1],
    image:
      'https://images.unsplash.com/photo-1616074735114-3b69f718096f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
  },
  {
    id: 3,
    text: 'Good! And you?',
    createdAt: new Date().getTime(),
    user: users[0],
  },
  {
    id: 2,
    text: 'Whats up bro?',
    createdAt: new Date('2021-02-17T03:26:00').getTime(),
    user: users[1],
  },
  {
    id: 1,
    text: 'Hi!',
    createdAt: new Date('2021-02-17T03:24:00').getTime(),
    user: users[1],
  },
  {
    id: 0,
    text: 'New room created.',
    createdAt: new Date('2021-02-17T03:24:00').getTime(),
    system: true,
    user: users[0],
  },
];
