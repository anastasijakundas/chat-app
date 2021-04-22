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

// export interface ExtendedChatRoom extends ChatRoom {
  
// }

