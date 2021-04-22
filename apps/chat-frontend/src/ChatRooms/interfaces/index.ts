export interface CreateChatRoomData {
  title: string;
  description: string;
}

export interface SendMessageData {
  sender: string;
  text: string;
  id: string;
}
