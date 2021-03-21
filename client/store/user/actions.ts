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
  console.log(newUser);
  const { data } = await axios.post(`http://192.168.0.14:19000/api/users/`, newUser);
  return dispatch(addUser(data));
};
