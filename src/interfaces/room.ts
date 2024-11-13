import { IUser } from '@models/User';

export interface IRoomsListItem {
  id: string;
  user: IUser;
  lastMessage: IChatMessage;
}

export interface IChatMessage {
  id: string | number;
  text: string;
  createdAt: Date | number;
  user: IUser;
  image?: string;
  video?: string;
  audio?: {
    uri: string;
    time: number;
  };
  system?: boolean;
  sent?: boolean;
  received?: boolean;
  pending?: boolean;
  viewed?: boolean;
  error?: boolean;
}
