export interface ChatRoom {
  creator: string;
  description: string;
  messages: Message[];
  title: string;
  _id: string;
}

export interface Message {
  _id: string;
  sender: string;
  text: string;
}

export interface IUser {
  _id: string;
  chats: IChat[];
  googleId: string;
  name: string;
  title: string;
}

export interface IChat {
  _id: string;
  participants: IUser[];
  title: string;
  messages: Message[];
}
