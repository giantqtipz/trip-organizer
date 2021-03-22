import { AnyAction } from 'redux';
import { TYPES } from '../types';
import { RegistrationAttributes, UserAttributes } from './interface';

const userState: UserAttributes = {
  user: {
    email: '',
    loggedIn: false,
  },
};

const registrationState: RegistrationAttributes = {
  user: {
    email: '',
    password: '',
  },
};

export const userReducer = (
  state = userState,
  action: AnyAction
): RegistrationAttributes => {
  switch (action.type) {
    case TYPES.ADD_USER:
      return {
        ...state,
        user: {
          ...state.user,
        },
      };
    default:
      return state;
  }
};
