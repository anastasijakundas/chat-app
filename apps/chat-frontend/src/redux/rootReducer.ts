import { combineReducers } from '@reduxjs/toolkit';

import chatSlice from '../Chats/slices';
import chatRoomSlice from '../ChatRooms/slices';
import userSlice from '../Login/slices';

const rootReducer = combineReducers({ chats: chatSlice, chatRooms: chatRoomSlice, user: userSlice });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
