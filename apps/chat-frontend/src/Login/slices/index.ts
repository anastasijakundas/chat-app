import { $CombinedState, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../redux/store';
import { RootState } from '../../redux/rootReducer';
import { ChatRoom, Message } from '@chat-application/types';

export interface User {
  _id: string;
  name: string;
  email: string;
  googleId: string;
}

export const initialState: User = {
  _id: '',
  name: '',
  email: '',
  googleId: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, { payload }: PayloadAction<any>) => {
      state = payload;
    },
  },
});

export const { createUser } = userSlice.actions;

export const chatRoomSelector = (state: RootState) => state.user;

export default userSlice.reducer;
