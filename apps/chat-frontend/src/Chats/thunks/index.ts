import axios from 'axios';

import {
  allUsersUrl,
  createChatUrl,
  getChatsUrl,
  getChatUrl,
} from '../../common/constants';
import { AppThunk } from '../../redux/store';
import {
  getAvailableUsers,
  createChat,
  getUsersChats,
  getChat,
} from '../slices';

export const getUsers = (): AppThunk => async (dispatch) => {
  try {
    const response = await axios.get(allUsersUrl);

    dispatch(getAvailableUsers(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const createNewChat = (data): AppThunk => async (dispatch) => {
  try {
    const response = await axios.post(createChatUrl, data);

    dispatch(createChat(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const getChats = (userId): AppThunk => async (dispatch) => {
  try {
    const response = await axios.get(`${getChatsUrl}/${userId}`);

    dispatch(getUsersChats(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const getChatData = (chatId: string): AppThunk => async (dispatch) => {
  try {
    const response = await axios.get(`${getChatUrl}/${chatId}`);

    dispatch(getChat(response.data));
  } catch (error) {
    console.error(error);
  }
};
