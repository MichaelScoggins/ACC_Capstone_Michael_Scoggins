import { combineReducers } from "redux";

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

const user = (state = "", action) => {
  switch (action.type) {
    case "SET_USER":
      console.log("reducer:", action.value);
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ businesses, user });
