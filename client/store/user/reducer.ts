import { AnyAction } from 'redux';
import { TYPES } from '../types';
import { UserAttributes } from './interface';

const initialState: UserAttributes = {
  user: {
    email: '',
    loggedIn: false,
  },
};

export const userReducer = (
  state = initialState,
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
