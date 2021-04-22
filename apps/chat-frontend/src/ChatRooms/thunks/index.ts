import axios from 'axios';

import { getChatRoomsUrl, createChatRoomUrl, getChatRoomUrl } from '../../common/constants';
import { AppThunk } from '../../redux/store';
import { getAllRooms, createRoom, getRoom } from '../slices';
import { CreateChatRoomData } from '../interfaces';

export const getChatRooms = (): AppThunk => async (dispatch) => {
  try {
    const response = await axios.get(getChatRoomsUrl);

    dispatch(getAllRooms(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const createChatRoom= (data: CreateChatRoomData): AppThunk => async (dispatch) => {
  try {
    const response = await axios.post(createChatRoomUrl, data);

    dispatch(createRoom(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const getChatRoom = (chatRoomId: string): AppThunk => async (dispatch) => {
  try {
    const response = await axios.get(`${getChatRoomUrl}/${chatRoomId}`);

    dispatch(getRoom(response.data));
  } catch (error) {
    console.error(error);
  }
};