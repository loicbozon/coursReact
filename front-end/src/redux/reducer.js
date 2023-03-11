import { SET_USER_INFO } from './action';

const initialState = {
  id: null,
  token: null,
  name: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export default userReducer;