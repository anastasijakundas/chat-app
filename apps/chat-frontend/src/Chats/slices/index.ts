import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../redux/store';
import { RootState } from '../../redux/rootReducer';
import { ChatRoom, Message } from '@chat-application/types';

export interface ChatState {
  users: any[];
  chats: any[];
  openedChat: any;
}

export const initialState: ChatState = {
  users: [],
  chats: [],
  openedChat: {
    title: '',
    participants: [],
    messages: [],
  },
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    getAvailableUsers: (state, { payload }: PayloadAction<any>) => {
      state.users = payload;
    },
    createChat: (state, { payload }: PayloadAction<any>) => {
      state.chats.push(payload);
    },
    getUsersChats: (state, { payload }: PayloadAction<any>) => {
      state.chats = payload.chats;
    },
    receiveMessage: (state, { payload }: PayloadAction<Message>) => {
      state.openedChat.messages.push(payload);
    },
    getChat: (state, { payload }: PayloadAction<any>) => {
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
