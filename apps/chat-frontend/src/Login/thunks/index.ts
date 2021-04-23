import axios from 'axios';

import { createUserUrl } from '../../common/constants';
import { AppThunk } from '../../redux/store';
import { createUser } from '../slices';
import { CreateUserData } from '../interfaces';

export const createOrUpdateUser = (data: CreateUserData): AppThunk => async (
  dispatch
) => {
  try {
    const response = await axios.post(createUserUrl, data);

    dispatch(createUser(response.data));
  } catch (error) {
    console.error(error);
  }
};
