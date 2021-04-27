import { Message } from '@chat-application/types';
// TODO move to common libs
export interface IMessage {
  sender: User;
  text: string;
  _id: string;
}

export interface ChatData {
  creator?: string;
  description?: string;
  messages: Message[];
  title: string;
  _id: string;
}

export interface User {
  _id: string;
  email: string;
  name: string;
}

export interface Chat {
  _id: string;
  title: string;
  messages: IMessage[];
  participants: string[];
}
