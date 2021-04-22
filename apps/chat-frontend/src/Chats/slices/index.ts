import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../redux/store';
import { RootState } from '../../redux/rootReducer';

export interface AuthState {
  users: any[];
  chats: any[];
}

export const initialState: AuthState = {
  users: [],
  chats: [],
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
    getUsersChats:(state, { payload }: PayloadAction<any>) => {
      state.chats = payload.chats;
    },
  },
});

export const { getAvailableUsers, createChat, getUsersChats } = chatSlice.actions;

export const chatSelector = (state: RootState) => state.chats;

export default chatSlice.reducer;
