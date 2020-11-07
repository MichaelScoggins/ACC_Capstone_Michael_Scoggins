import { combineReducers } from "redux";

const strains = (state = [], action) => {
  switch (action.type) {
    case "FETCH_LISTINGS":
      return [action.value];
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
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ strains, user });
