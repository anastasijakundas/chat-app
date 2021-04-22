import { combineReducers } from '@reduxjs/toolkit';

import chatSlice from '../Chats/slices';
import chatRoomSlice from '../ChatRooms/slices';

const rootReducer = combineReducers({ chats: chatSlice, chatRooms: chatRoomSlice });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
