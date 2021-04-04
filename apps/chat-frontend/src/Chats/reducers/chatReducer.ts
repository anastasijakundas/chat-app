import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../redux/store';
import { RootState } from '../../redux/rootReducer';

export const chatSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    setLoading: (state, { payload }: PayloadAction) => {},
    setAuthSuccess: (state, { payload }: PayloadAction) => {},
    setLogOut: (state) => {},
    setAuthFailed: (state, { payload }: PayloadAction) => {},
  },
});

export const {
  setAuthSuccess,
  setLogOut,
  setLoading,
  setAuthFailed,
} = chatSlice.actions;

export const authSelector = (state: RootState) => state;
