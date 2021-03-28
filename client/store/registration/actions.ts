import axios from 'axios';
import { TYPES } from '../types';
import { UserAttributes } from './interface';
import { AppThunk } from '../thunkType';

const addUser = (user: UserAttributes[]) => ({
  type: TYPES.ADD_USER,
  user,
});

export const createUser = (newUser: UserAttributes): AppThunk => async (
  dispatch
) => {
  const { data } = await axios.post(`http://10.0.2.2:3000/api/users/`, newUser);
  return dispatch(addUser(data));
};
