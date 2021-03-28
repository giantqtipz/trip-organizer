import { AnyAction } from 'redux';
import { TYPES } from '../types';
import { UserAttributes } from './interface';

const userState: UserAttributes = {
  user: {
    email: '',
    loggedIn: false,
  },
};

export const userReducer = (
  state = userState,
  action: AnyAction
): UserAttributes => {
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
