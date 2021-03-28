import axios from 'axios';
import { RegistrationAttributes } from './interface';
import { AppThunk } from '../thunkType';

export const createUser = (
  newUser: RegistrationAttributes
): AppThunk => async () => {
  const { data } = await axios.post(`http://10.0.2.2:3000/api/users/`, newUser);
  return data;
};
