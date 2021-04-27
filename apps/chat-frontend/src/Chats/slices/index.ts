import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../redux/store';
import { RootState } from '../../redux/rootReducer';
import { ChatRoom, Message } from '@chat-application/types';
import { Chat, IMessage, User } from '../../common/interfaces';

export interface ChatState {
  users: any[];
  chats: Chat[];
  openedChat: Chat;
}

export const initialState: ChatState = {
  users: [],
  chats: [],
  openedChat: {
    title: '',
    participants: [],
    messages: [],
    _id: '',
  },
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    getAvailableUsers: (state, { payload }: PayloadAction<User[]>) => {
      state.users = payload;
    },
    createChat: (state, { payload }: PayloadAction<Chat>) => {
      state.chats.push(payload);
    },
    getUsersChats: (state, { payload }: PayloadAction<Chat[]>) => {
      state.chats = payload;
    },
    receiveMessage: (state, { payload }: PayloadAction<Chat>) => {
      state.openedChat.messages = payload.messages;
    },
    getChat: (state, { payload }: PayloadAction<Chat>) => {
      state.openedChat = payload;
    },
  },
});

export const {
  getAvailableUsers,
  createChat,
  getUsersChats,
  receiveMessage,
  getChat,
} = chatSlice.actions;

export const chatSelector = (state: RootState) => state.chats;

export default chatSlice.reducer;
