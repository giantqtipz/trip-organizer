import axios from 'axios';
import { Platform } from 'react-native';
import { OS_ANDROID } from 'react-native-dotenv';
import { RegistrationAttributes } from './interface';
import { AppThunk } from '../thunkType';

export const createUser = (
  newUser: RegistrationAttributes
): AppThunk => async () => {
  const { data } = await axios.post(
    Platform.OS === 'android' ? `${OS_ANDROID}/api/users/` : 'api/users',
    newUser
  );
  return data;
};
