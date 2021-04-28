import { $CombinedState, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../redux/store';
import { RootState } from '../../redux/rootReducer';
import { ChatRoom, Message } from '@chat-application/types';
import { IMessage } from './../../common/interfaces';

export interface Room {
    title: string;
    description: string;
    creator: string;
    id: string;
    messages: Message[];
  }

export interface RoomsState {
  rooms: ChatRoom[];
  openedRoom: Room; // TODO add type
}

export const initialState: RoomsState = {
  rooms: [],
  openedRoom: {
    title: '',
    description: '',
    creator: '',
    id: '',
    messages: [],
  },
};

export const chatRoomSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    getAllRooms: (state, { payload }: PayloadAction<ChatRoom[]>) => {
      state.rooms = payload;
    },
    createRoom: (state, { payload }: PayloadAction<ChatRoom>) => {
      state.rooms.push(payload);
    },
    getRoom: (state, { payload }: PayloadAction<Room>) => {
      state.openedRoom = payload;
    },
    receiveMessage: (state, { payload }: PayloadAction<Room>) => {
      state.openedRoom.messages = payload.messages;
    },
  },
});

export const { getAllRooms, createRoom, getRoom, receiveMessage } = chatRoomSlice.actions;

export const chatRoomSelector = (state: RootState) => state.chatRooms;

export default chatRoomSlice.reducer;
