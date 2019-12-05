import {
  SET_USER_LIST,
  SET_USER_DATA
} from "../actions/actions";

const initialState = {
  usersData: [],
  singleUserData: [],
};

export default function rootReducer(state= initialState, action) {
  switch (action.type) {
    case SET_USER_LIST: {
      return {...state, usersData: action.payload}
    }
    case SET_USER_DATA: {
      return {...state, singleUserData: action.payload}
    }
    default:
      return state;
  }
};