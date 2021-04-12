import { combineReducers } from '@reduxjs/toolkit';

import chatSlice from '../Chats/slices';

const rootReducer = combineReducers({chat: chatSlice});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
