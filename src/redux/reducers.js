import { combineReducers } from "redux";

const users = (state = [], action) => {
  switch (action.type) {
    case "SET_USER":
      return [...state, action.value];
    default:
      return state;
  }
};

const businesses = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.value];
    case "REMOVE_LISTING":
      return [...state.filter((business) => business.id !== action.value)];
    default:
      return state;
  }
};

export default combineReducers({ businesses, users });
